/*var http = require('http');
var mysql = require('mysql');*/
// Create a connection to MySql Server and Database
/*var connection = mysql.createConnection({
  host : '192.168.1.76',
  port : 3306,
  database: 'jackpot',
  user : 'user',
  password : 'pass'
});*/
var core = require('./core');
var path = __dirname + '\\public';

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err.stack);
});
console.log('mypath=%s',path);
core.init(path);