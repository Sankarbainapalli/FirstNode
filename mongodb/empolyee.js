// var MongoClient = require('mongodb').MongoClient;
var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var url = "mongodb://localhost:27017/sankar";

MongoClient.connect(url, function(err, db) {
   if(err){
   	console.log(err);
   }else{
   	console.log('connected to',url);
   	db.close();
   }
  
});