

var UserValidate=require('../helper/userValidate');
var UserDAO=require('../dataAccessObjects/userDAO');

var userValidate=new UserValidate();
var user=new UserDAO();

function UserBusinessLayer( ){
	"use strict";

	this.registerNewUser=function(req,callback){
		console.log("registerNewUser called in UserBusinessLayer !!!");
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
                        errors['status']=true;
                        callback(errors,null);
                    }else{
                    	callback(errors,null);
                    }
				}else{
					console.log(result);
					callback(null,result);
				}
				

				//call sessionDAO to start new session

			});

			

		}else{
			console.log("SignUp failed !!");
			callback(errors,null);
		}

	}
}

module.exports=UserBusinessLayer;

