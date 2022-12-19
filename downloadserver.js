var fs = require('fs')
var http = require('http')

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type" : "text/html"})

    var file = fs.createReadStream("index.html")
    file.pipe(res)
}).listen(8080);