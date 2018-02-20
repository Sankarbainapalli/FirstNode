var express = require('express');  
var app = express();  
app.use(express.static('public'));  
  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
// app.get('/process', function (req, res) {  
// response = {  
//        first_name:req.query.firstname,  
//        last_name:req.query.lastname  
//    };  
//    console.log(response);  
//    res.end(JSON.stringify(response));  
// })  
var server = app.listen(8000, function () {  
  
  // var host = server.address().address  
  // var port = server.address().port  
  console.log("Example app listening at 8000")  
  
})  
