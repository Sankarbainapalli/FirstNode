var myString= 'hallo nojes';

function onFunction(req,res){
	console.log("server exucuted");
}
module.exports.onFunction=onFunction;
module.exports.myString=myString;