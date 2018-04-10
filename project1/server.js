
// method1
// var http = require('http');
// http.createServer(function (request,response){
// 	response.write("hello world");
// 	response.end();
// }).listen(8081);
// console.log('server running at http://127.0.0.1:8081/');


//method2

var http= require('http');
var url= require('url');

function startServer(route,handle){
 function onRequest(req,res){
 	var pathname = url.parse(req.url).pathname;
 	console.log("server resposnse successfully received "+ pathname);
 	route(handle,pathname,res);
 	
 }
 http.createServer(onRequest).listen(8888);

 console.log("server started at 8888");
}

exports.startServer = startServer;

