/**
 * Created by ryndeeva_aa on 22.03.2016.
 */
var http = require('http');

var server = new http.Server();

server.listen(3000, '127.0.0.1');

server.on('request', function(req, res)
{
   res.end("Hello!\n");
});