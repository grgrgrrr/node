/**
 * Created by ryndeeva_aa on 22.03.2016.
 */
    //http://127.0.0.1:1337/echo?message=Hello

var http = require('http');

var server = http.createServer();
var request = require('./request');
server.on('request', request);

server.listen(3000);

