var express = require('express');
var app =express();

app.get('/home',function(req,res){

	res.send("welcoe sanksar");

});
var server = app.listen(8000,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('example http://%s:%s',host,port);
})