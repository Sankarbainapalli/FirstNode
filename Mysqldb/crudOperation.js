var express=require('express');
var app=express();
var mysql=require('mysql');
var con=mysql.createConnection({
host:"localhost",
user:"root",
password:'',
databasse:'data'
	
});
con.connect(function(err){
	if (err) throw err;
	console.log("databse connected");
	var sql="select * from todo";
	con.query(sql,function(err,data){
		if (err) throw err;
		console.log(data);

	})

})
app.listen(6644,function(err,res){
	if(err){
		console.log("there is no port specify here";)
	}else{
		console.log("server started at port 6644");
	}
})