/**
 * Created by ryndeeva_aa on 22.03.2016.
 */
var fs = require('fs');

fs.readFile(__filename, {encoding: 'utf-8'}, function(err, data)
{
   if (err)
   {
       console.log(error);
   }
    else
   {
       console.log(data);
   }
});

fs.writeFile("file.tmp", "data", function(err)
{
    if (err) throw err;

    fs.rename("file.tmp", "new.tmp", function(err)
    {
       if (err) throw err;

        fs.unlink("new.tmp", function(err)
        {
           if (err) throw err;
        });
    });
});