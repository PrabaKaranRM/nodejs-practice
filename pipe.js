var fs = require('fs');

var file = fs.createReadStream('samp.txt');
file.pipe(process.stdout);