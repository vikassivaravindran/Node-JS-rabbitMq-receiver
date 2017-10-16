var express = require('express');
var home= express.Router();
var amqp=require('amqplib/callback_api');
amqp.connect('amqp://localhost',function(err,conn){
	conn.createChannel(function(err,ch){
		
		var q = 'messageQueue1';
		ch.assertQueue(q,{durable:false});
		ch.consume(q,function(msg){
//console.log("Received msg:",msg);
			console.log("Received:",JSON.parse(msg.content));
		},{noAck:true});
		
	});	
});
home.get('/',function(req,res){
res.setHeader('Content-Type', 'application/json');
	res.write('Home..');
	console.log('Home..');
	
});
home.get('/home',function(req,res){
	res.setHeader('Content-Type', 'application/json');
	res.write('Home12..');
	console.log('Home12..');
	
});
module.exports=home;
