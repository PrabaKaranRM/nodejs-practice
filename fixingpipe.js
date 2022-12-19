var fs = require('fs');

var file = fs.createReadStream('origin.txt');
var destFile = fs.createWriteStream('destination.txt');

file.pipe(destFile);