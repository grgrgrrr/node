/**
 * Created by ryndeeva_aa on 22.03.2016.
 */
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res)
{
    if (req.url == '/big.html')
    {
        var file = new fs.ReadStream('big.html');
        sendFile(file, res);
    }
}).listen(3000);

function sendFile(file, res)
{
    file.pipe(res);
    file.pipe(process.stdout);

    file.on('error', function(err)
    {
        res.statusCode = 500;
        res.end("Server error");
        console.error(err);
    });

    res.on('close', function()
    {
        file.destroy();
    });

    /*file.on('readable', write);

    function write()
    {
        var fileContent = file.read(); //read data
        if (fileContent && !res.write(fileContent)) //send data
        {
            file.removeListener('readable', write);

            res.once('drain', function() // wait
            {
                file.on('readable', write);
                write();
            })
        }
    }
    file.on('end', function()
    {
       res.end();
    });*/
}