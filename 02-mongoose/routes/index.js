var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
 var url="mongodb://localhost:27017/test";
 mongoose.connect(url);
 var Schema=mongoose.Schema;

  var userData=new Schema({

    FirstName:{
		type:String,
		require:true
	},
	LastName:{
		type:String,
		require:true
	},
	Email:{
		type:String,
		require:true
		
	},
	password:{
		type:String,
		require:true
		
	}


});
  var Student=mongoose.model('students',userData)


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/getdata', function(req, res) {
	Student.find().then(function(doc){
		res.render('index',{items:doc});
	});
  
});


router.post('/insert', function(req, res) {
	var item={
		FirstName:req.body.FirstName,
		LastName:req.body.LastName,
		Email:req.body.Email,
		Pass:req.body.Pass
	}
	  var data=Student(item);
	  data.save();
	  res.redirect('/');

});

router.post('/update', function(req, res) {
	var ID=req.body.id;
	saidulu.findById(ID,function(err,doc){
		if(err){
			console.log('cant find');
		}
		doc.FirstName=req.body.FirstName;
		doc.LastName=req.body.LastName;
		doc.Email=req.body.Email;
		doc.Pass=req.body.Pass;
		doc.save(function(err,data){
			if(err){
				console.log(err);
			}else{
				console.log(data);
			}
})
	});
	res.redirect('/');
  
});

router.post('/delete', function(req, res) {

	var ID=req.body.id;
	saidulu.findByIdAndRemove(ID).exce();
	res.redirect('/');
  
});
console.log('executed successfully');


module.exports = router;
