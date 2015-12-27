

var UserValidate=require('../helper/userValidate');
var UserDAO=require('../dataAccessObjects/userDAO');

var userValidate=new UserValidate();
var user=new UserDAO();

function UserBusinessLayer( ){
	"use strict";

	this.registerNewUser=function(req,callback){
		var newUser=req.body.user;
		var username=newUser.username;
		var email=newUser.email;
		var password=newUser.password;
		var verifyPassword=newUser.confirmPassword;
 
		var errors={'username': username, 'email': email};
		

		if(userValidate.validateSignup(username,password,verifyPassword,email,errors)){
			//call userDAO to add new user
			user.addNewUser(username,password,email,function(error,result){
				
				if(error){
					if (error.code == '11000') {
                        errors['username_error'] = "Username already in use. Please choose another";
                        callback(errors,null);
                    }else{
                    	callback(errors,null);
                    }
				}
				console.log(result);

				//call sessionDAO to start new session

			});

			

		}else{
			console.log("SignUp failed !!");
			callback(errors,null);
		}

	}
}

module.exports=UserBusinessLayer;

/*module.exports={

	registerNewUser : function(req,callback){
		var newUser=req.body.user;
		var username=newUser.username;
		var email=newUser.email;
		var password=newUser.password;
		var verifyPassword=newUser.confirmPassword;
 
		var errors={'username': username, 'email': email};

		var userValidate=new UserValidate();
		var user=new UserDAO();

		if(userValidate.validateSignup(username,password,verifyPassword,email,errors)){
			//call userDAO to add new user
			user.addNewUser(newUser,function(error,result){
				if(error){
					if (err.code == '11000') {
                        errors['username_error'] = "Username already in use. Please choose another";
                        callback(errors,null);
                    }else{
                    	callback(errors,null);
                    }
				}
				console.log(result);

				//call sessionDAO to start new session

			});

			

		}else{
			console.log("SignUp failed !!");
			callback(errors,null);
		}

	}
	registerNewUser:function (req,callback) {
		
		var newUser=req.body.user;

		if(newUser.password === newUser.confirmPassword){
			console.log("Password matching");
			callback(null,newUser);
		}else{
			callback({
                        "errorResponseCode": 404,
                        "errorMessage": "password doesn't match"
                    }, null);
			
		}
	}
}*/