var express = require('express');
var app =express();
app.set('view engine','ejs')

app.get('/about',function(req,res){

	res.sendFile( __dirname + '/about.html');


})
var students={

1:'sankar',
2:'senaoti'

}
app.get('/students/:id',function(req,res){

	res.render(' students',{ name : students[req.params.id]});
})
var server = app.listen(8000,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('example http://%s:%s',host,port);
})