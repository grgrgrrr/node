var log = require('logger')(module); //module as argument, load logger

var db = require('db');
db.connect();

var User = require('./user/index'); //

function run()
{
    var ellis = new User("Ellis");
    var kate = new User("Kate");

    ellis.hello(kate);

    log(db.getPhrase("Run successful"));
}

if (module.parent)
{
    exports.run = run;
}
else
{
    run();
}
