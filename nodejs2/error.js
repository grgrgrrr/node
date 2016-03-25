var util = require('util');

var phrases =
{
    "Hello": "hello",
    "world": "world"
};

function phraseError(msg)
{
    this.msg = msg;
    Error.captureStackTrace(this);
}
util.inherits(phraseError, Error);
phraseError.prototype.name = 'phraseError';


function httpError(status, msg)
{
    this.status = status;
    this.msg = msg;
    Error.captureStackTrace(this);
}
util.inherits(httpError, Error);
httpError.prototype.name = "httpError";

function getPhrase(name)
{
    if (!phrases[name]) {
        throw new phraseError("There is no such name "+ name);
    }
    return phrases[name];
}

function makePage(url)
{
    if (url != 'index.html')
    {
        throw  new httpError(404, "No such page");
    }
    return util.format("%s, %s", getPhrase("Helo"), getPhrase("world"));
}


try
{
    var page = makePage('index.html');
    console.log(page);
}
catch (e)
{
    if (e instanceof httpError)
    {
        console.log(e.status, e.msg);
    }
    else
    {
        console.error("Error %s msg %s ", e.name, e.msg, e.stack);
    }
}
