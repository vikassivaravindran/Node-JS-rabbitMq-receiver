var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
//var path = require('path');
var promise = require('promise');
var app = express();
var home= require('./home/home');
var fs = require('fs');
var redis = require('redis');
var api = require('./api/api');
//var readFile = Promise.denodeify(require('fs').readFile);
//const readFile = require('fs-readfile-promise');
app.use('/',home);
//app.use('/home',home);
app.use('/api',api);
app.set('port',8083);

var client = redis.createClient();
client.on("error",function(err){
	console.log("Error:",err);
});
client.set("key","Hai",redis.print);
function addPromise(){
	console.log("AddPromise");
	return new promise(function(){		
		console.log('Add inside promise');
	});		
}
function addCallback(){
	console.log("AddCallback");	
}
function hai(){
	console.log("Before add");
	addPromise().then(console.log('add then'));
	//addCallback();
	console.log("After add");
}
hai();
//readFile('files/menu.txt').then(buffer => console.log(buffer.toString()));
fs.readFile('files/menu.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log("Data:",data);
});

console.log("End...");
var server = app.listen(app.get('port'),function(){
	console.log('Listening to port 8083');
});