/**
 * Created by ryndeeva_aa on 22.03.2016.
 */
var fs = require('fs');

var stream = new fs.ReadStream("sjkasf.js"/*__filename*/, {encoding: 'utf-8'});

stream.on('readable', function()
{
    var data = stream.read();
    console.log(data);
});

stream.on('end', function()
{
   console.log("The end");
});

stream.on('error', function(err)
{
    if (err.code == 'ENOENT')
    {
        console.log('File does not exists');
    }
    else
    {
        console.error(err);
    }
});