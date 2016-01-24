"use strict";
var crypto = require('crypto');
var SessionModel=require('../models/sessionModel');

function SessionDAO () {

	this.startSession=function(username,callback){
		
		//Generate sessionId
		var currentDate=(new Date()).valueOf().toString();
		var random=Math.random().toString();
		var session_id=crypto.createHash('sha1').update(currentDate+random).digest('hex');

		//Create session Document
		var session={'_id':session_id,'username':username};
		var newSession=new SessionModel(session);
		newSession.save(function(err,sessionCreated){
			if(err){
				console.log("Error in creating session for user "+username);
				console.log("Error:"+err);
				callback(err,null);
			}else{
				console.log("Session created !!"+sessionCreated);
				callback(null,session_id);
			}
		});

	}	
}

module.exports=SessionDAO;