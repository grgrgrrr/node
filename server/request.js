var url = require('url');

module.exports = function(req, res)
{
    var urlParsed = url.parse(req.url, true);
    //debugger;
    console.log(urlParsed);

    if (req.method = 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message)
    {
        res.statusCode = 200;
        res.end(urlParsed.query.message + "\n");
        return;
    }

    res.statusCode = 404;
    res.end("Page not found\n");
}; // EventEmitter