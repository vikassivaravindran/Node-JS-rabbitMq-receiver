var request = require('request');
var express = require('express');
var router = express.Router();
router.get('/redirect/order',function(req,res){
	
	 request({
		//url:'https://www.google.co.in',
		url:'http://localhost:8085/order/getAllOrders',
		method:'GET'
		
	},function(error,response,body){
		console.log("welocme");
		res.write(body);
		res.end();
		
	}); 
	
	
});
module.exports=router;