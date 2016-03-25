var http = require('http');
var fs = require('fs');

var server = new http.Server();


server.on('request', function(req, res)
{
    var info;
    if (req.url == '/')
    {
        fs.readFile('index.html', function(err, info) //callback
        {
            if (err)
            {
                console.log(err);
                res.statusCode = 500;
                res.end("Server error!");
                return;
            }
            res.end(info);
        });
    }
    else
    {

    }
});

server.listen(3000);
