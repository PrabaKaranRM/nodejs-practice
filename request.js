const { response } = require("express");
var http = require("http")
var port = 4000

var server = http.createServer();

server.on('req', function(req,res) {
    req.writeHead(200);
    req.write("na oru request function");
    req.end();
})