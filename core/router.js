exports.run = function route(app, routes){
    var handlers = {};

    routes.forEach(function(val){
        handlers[val] = require('../routes/'+val);

        app.get('/'+val, handlers[val].get);
        app.get('/'+val+'/:id', handlers[val].upd);
    });
};
