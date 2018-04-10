var express=require('express');
var socket=require('socket.io');
var app=express();
var server=app.listen(4000,function(req,res){
	console.log("server started at 4000");


});

// app.get('/home',function(req,res){
// 	res.send("hai sankar");

// })

app.use(express.static('chatapp/public'));

var io=socket(server);

io.on('connection',function(socket){
	console.log('made connection',socket.id);

	socket.on('chat',function(data){
		io.sockets.emit('chat',data);
	})
})