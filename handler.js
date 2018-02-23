function home(res){
	console.log('homepage');
	var htmlfile = '<html>'+
	'<head>'+
	'</head>'+
	'<body>'+
	'<form action="/about" method="post">'+
	'<input type="text" name="name">'+
	'<input type="submit" value="submit">'+
	'</form>'+
	'</body>'+
	'</html>';
	res.writeHead(200,{"Content-Type":"text/html"});
 	res.write(htmlfile);
 	res.end();

}
function about(){
	console.log('about');
}
exports.home=home;
exports.about=about;