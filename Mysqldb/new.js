var express=require('express');
var mysql = require('mysql-wrapper');
var bodyparser=require('body-parser');
var app=express();
var mysql=require('mysql');
var con=mysql.createConnection({
host:"localhost",
user:"root",
password:'',
database:'nodejs'
	
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended:true
}));

// var urlencodedParser=bodyparser.urlencoded({extended:false});

con.connect(function(err){
	if (err) throw err;
	console.log(" mysql connected");
	// // var sql="select * from todos";
	// // con.query(sql,function(err,data){
	// // 	if (err) throw err;
	// // 	console.log(data);
	// // 	con.end();

	// });

});

app.get('/createdatabase',function(req,res){
	// var con=req.con;
let sql="create database nodejs";
con.query(sql,function(err,result){
	if(err) throw err;
	console.log("database created");
res.send(result);
})
});
app.get('/createtable',function(req,res){
	// var con=req.con;
let sql="create table student(id int,name varchar(255),email varchar(255))";
con.query(sql,function(err,result){
	if(err) throw err;
	console.log("table created");
res.send(result);
})
});
app.post('/postdata',function(req,res){

	let data={name:req.body.name,email:req.body.email};
let sql="insert into student set ?";
con.query(sql,data,function(err,result){
	if(err) throw err;
	console.log(req.body);
	console.log("inserted records");
res.send(result);
})
});



app.listen(6644,function(err,res){
	if(err){
		console.log("there is no port specify here");
	}else{
		console.log("server started at port 6644");
	}
})