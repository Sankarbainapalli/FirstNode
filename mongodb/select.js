var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var url="mongodb://localhost:27017/MongoDatabase";

MongoClient.connect(url,function(err,db){

	if(err){
		console.log(err);
	}else{
		console.log('connected to',url);
		var collection=db.collection('sankar');
	
		 collection.find().toArray(function(err,res){
		 	if (err) {
		 		console.log(err);
		 	}else if(res.length){
		 		console.log(res);
		 	}else{
		 		console.log('no such value find');
		 	}
		 	db.close();
		 });
	}
});