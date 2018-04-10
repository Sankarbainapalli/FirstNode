var http=require('http');

var app=require('./app');

http.createServer(app.handlerFunction).listen(9999);
console.log("server started at port 9999");