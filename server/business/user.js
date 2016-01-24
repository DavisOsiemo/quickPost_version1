

var UserValidate=require('../helper/userValidate');
var UserDAO=require('../dataAccessObjects/userDAO');
var SessionDAO=require('../dataAccessObjects/sessionDAO');



function UserBusinessLayer( ){
	"use strict";

	var userValidate=new UserValidate();
	var user=new UserDAO();
	var session=new SessionDAO();

	this.registerNewUser=function(req,callback){
		console.log("registerNewUser called in UserBusinessLayer !!!");
		var username=req.body.user.username;
		var email=req.body.user.email;
		var password=req.body.user.password;
		var verifyPassword=req.body.user.confirmPassword;
 
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
					//Create session
					session.startSession(result['_id'],function(err,session_id){
						if(err){
							errors['session_error']="Error in creating session";
							callback(errors,null);
						}else{
							var newuser={};
							newuser.username=result['_id'];
							newuser.email=result.email;
							newuser.sessionid=session_id;
							console.log("user with session "+newuser);
							callback(null,newuser);
						}

					});
				}

			});		

		}else{
			console.log("SignUp failed !!");
			callback(errors,null);
		}

	}// endOf registerNewUser


	this.handleLoginRequest=function(req,callback){

		"use strict";

        var username = req.body.credentials.username;
        var password = req.body.credentials.password;
        var errors={'username': username, 'password': password};
        console.log("Credentials submitted >  username: " + username + " pass: " + password);

        user.validateLogin(username,password,function(error,result){
       		if(error){
       			callback(error,null);
       		}else{

       			//Create session
       			session.startSession(result['_id'],function(err,session_id){
					if(err){
						errors['session_error']="Error in creating session";
						callback(errors,null);
					}else{
						var validUser={};
						validUser.username=result['_id'];
						validUser.email=result.email;
						validUser.password=result.password;
						validUser.sessionid=session_id;
						console.log("user logged in with session "+validUser);
						callback(null,validUser);
					}

				});
       		}
       		
       });


	}
}

module.exports=UserBusinessLayer;

