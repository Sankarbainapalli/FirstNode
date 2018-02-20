var http = require('http');
http.createServer(function (request,response){
	response.write("hello world");
	response.end();
}).listen(8081);
console.log('server running at http://127.0.0.1:8081/');