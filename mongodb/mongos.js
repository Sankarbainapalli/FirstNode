var mongoose=require('mongoose');
var assert=require('assert');
var Schema=mongoose.Schema;
var text= new Schema({
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
		require:true,
		unique:true
	},
	password:{
		type:String,
		require:true,
		unique:true
	}


});
var Students=mongoose.model('students',text);
module.exports=Students;