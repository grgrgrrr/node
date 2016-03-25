/**
 * Created by ryndeeva_aa on 22.03.2016.
 */
var  util = require('util');
var obj =
{
    a: 5,
    b: 6,
    inspect: function()
    {
        return 123;
    }
}

obj.self = obj;
console.log(util.inspect(obj));
//console.log(obj); //same result