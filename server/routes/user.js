var express = require('express');
var router = express.Router();
var UserBusinessLayer = require('../business/user');

//instantiating UserBl object using constructor pattern
var UserBL=new UserBusinessLayer();



router.route('/register').post(function(req,res) {
	
	UserBL.registerNewUser(req,function(error,success){
		if(error){
			res.send(error);
		}else{
			res.status(200);
			res.send(success);
		}
	});
	 
});

module.exports = router;