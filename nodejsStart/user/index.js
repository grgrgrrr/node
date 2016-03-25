//exports = module.exports = this
//global
var log = require('logger')(module);
var db = require('db');
//db.connect();

function User(name)
{
    this.name = name;
}

User.prototype.hello = function(who)
{
    log(db.getPhrase("Hello") + ", " + who.name);
}

//exports.User = User; //global
module.exports = User;