var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var url="mongodb://localhost:27017/MongoDatabase";

MongoClient.connect(url,function(err,db){

	if(err){
		console.log(err);
	}else{
		console.log('connected to',url);
		var collection=db.collection('sankar');
		 var doc={name:'sankar',subject:'name'};
		 collection.insert([doc],function(err,res){
		 	if (err) {
		 		console.log(err);
		 	}else{
		 		console.log("%d doc inserted",res.insertedcount);
		 	}
		 	db.close();
		 });
	}
});