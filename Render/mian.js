var http= require('http');
var fs=require('fs');

function onFunction(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	fs.readFile('index.html',null,function(err,data){
		if(err){
			res.write(err);
			res.write(404);
		}else{
			res.write(data);
		}
		res.end();
	})
	res.write("hello cart");
	
}

http.createServer(onFunction).listen(4464);