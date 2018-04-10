var server = require('./server');
var router=require('./router');
var handler=require('./handler');

var handle ={};
handle["/"]= handler.home;
handle["/home"]=handler.home;
handle["/about"]=handler.about;

server.startServer(router.route,handle);