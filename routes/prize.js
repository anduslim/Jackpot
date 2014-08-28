var logAndRespond = function logAndRespond(err,res,status){
    console.error(err);
    res.statusCode = ('undefined' === typeof status ? 500 : status);
    res.send({
        result: 'error',
        err:    err.code
    });
};
var handleConnection = function handleConnection(callback,req,res){
    req.mysql.getConnection(function(err,connection){
        if (err){ logAndRespond(err,res); return; }
        callback(connection,req,res);
    });
};
function handleGet(connection,req,res) {

    connection.query('SELECT * FROM prize WHERE quantity > 0 AND (active = 1 OR (active_time IS NOT NULL AND TIMESTAMPDIFF(SECOND, NOW(), active_time) < 0)) ORDER BY id', function handleSql(err, rows) {
        if (err){ logAndRespond(err,res); return; }
        if (rows.length === 0){ res.send(204); return; }
        var row = [];
        for (var i = 0; i < rows.length; i++) {
            console.log(rows[i]);
            if (rows[i].active_time != null )
                row.push(rows[i]);
        }
        console.log("Row length:" + row);
        if (row.length > 0) {rows = row;}
        res.send({
            result: 'success',
            err:    '',
            json:   rows,
            length: rows.length
        });
        connection.release();
    });
}

function handleFind(connection,req,res) {
    var find = function find(id){
        connection.query('SELECT * FROM prize WHERE id = ?', id, function handleSql(err, rows) {
            if (err){ logAndRespond(err,res); return; }
            if (rows.length === 0){ res.send(204); return; }
            if (rows[0]['active'] == 1 && rows[0]['quantity'] == 0){ handleUpdActive(connection,req,res); rows[0]['active'] = 0;}
            res.send({
                result: 'success',
                err:    '',
                id:     id,
                json:   rows[0],
                length: 1
            });
            connection.release();
        });
    };
    var cacheFind = req.cache(find, { async: true, maxAge: 1000*60, preFetch: true });
    cacheFind(req.params.id);
}

function handleUpdQuantity(connection,req,res) {
    connection.query('UPDATE prize SET quantity = quantity - 1 WHERE quantity > 0 AND id='+req.params.id, req.query, function handleSql(err) {
        if (err){ logAndRespond(err,res); return; }
        handleFind(connection,req,res)
    });
}


function handleUpdActive(connection,req,res) {
    connection.query('UPDATE prize SET active = 0 WHERE id='+req.params.id , req.query, function handleSql(err) {
        if (err){ logAndRespond(err,res); return; }
    });
}

exports.get = function(req,res){
    handleConnection(handleGet,req,res);
};
exports.upd = function(req,res){
    handleConnection(handleUpdQuantity,req,res);
};

