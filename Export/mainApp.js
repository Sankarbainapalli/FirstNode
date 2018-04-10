var http=require('http');
var module1=require('./module1');
var module2=require('./module2');
function onRequest(req,res){
	res.writeHead(200,{"Context-Type":"text/plain"});
	res.write("hello cart");
	res.end();
	console.log("server created");
}
http.createServer(onRequest).listen(8000);