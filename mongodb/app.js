var mongoose=require('mongoose');
var assert=require('assert');
 var Student=require('./mongos.js');
 var url="mongodb://localhost:27017/MongoDatabase";
 mongoose.connect(url);
 var db=mongoose.connection;
 // db.on('e',console.error.bind(console,'connection error'));
 db.on('open',function(){
 	console.log("connected");
 });
 var newT= Student({
 FirstName:'Sankar',
 LastName:'Bainapalli',
 Email:'sankar0064@gmail.com',
 password:'1234'
});
 	newT.save(function(err){

 if(err) throw err
 Student.find({},function(err,data){
 	if(err) throw err
 	// 	console.log(err);
 	// }
 	console.log(data);
 });

 });