function route(handle,pathname,res){
	console.log('server request is'+ pathname);

if(typeof handle[pathname] === 'function'){

	handle[pathname](res);
}else{
	console.log('no handler ' + pathname);
	res.writeHead(404,{"Content-Type":"text/plain"});
 	res.write("Error 404 not found");
 	res.end();

}
}

exports.route = route;