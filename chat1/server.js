/**
 * Created by ryndeeva_aa on 25.03.2016.
 */
var http = require('http');
var fs = require('fs');
var chat = require('./chat');

http.createServer(function(req, res)
{
    switch (req.url)
    {
        case '/':
            sendFile("index.html", res);
            break;
        case '/subscribe':
            chat.subscribe(req, res);
            break;
        case '/publish':
            var body = '';
            req.on('readable', function()
            {
                var r = req.read() || '';
                body += r;
                console.log("Body", body);

                if (body.length > 1e4)
                {
                    res.statusCode = 413;
                    res.end("Your message is too big for chat");
                }
            }).on('end', function()
            {
                try
                {
                    body = JSON.parse(body);
                    console.log("Json", body);
                } catch(e)
                {
                    res.statusCode = 400;
                    res.end("Bad request");
                    return;
                }

                chat.publish(body.message);
                res.end("ok");
            });

            break;

        default:
            res.statusCode = 404;
            res.end("Not found");
    }
}).listen(3000);


function sendFile(filename, res)
{
    var filestream = fs.createReadStream(filename);
    filestream.on("error", function()
    {
        res.statusCode = 500;
        res.end("Server error");
    });

    filestream.pipe(res);

}