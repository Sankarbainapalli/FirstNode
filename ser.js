var http = require('http');

function start(){
	function onRequest(req,res){

		console.log('stated server');
		res.writeHead(200,{"Content-Type":"text/plain"});
		res.write('hello server');
		res.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("server start at 8888");
}
exports.start = start;