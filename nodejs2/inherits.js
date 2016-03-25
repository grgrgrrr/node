var util = require('util');

//parent
function Animal(name)
{
    this.name = name;
}
Animal.prototype.walk = function()
{
    console.log("Walk "+ this.name);
}

//child
function Rabbit(name)
{
    this.name = name;
}

Rabbit.prototype.jump = function()
{
    console.log("Jump " + this.name);
}

util.inherits(Rabbit, Animal);

//using
var rabbit = new Rabbit("Roger");
rabbit.walk();
rabbit.jump();