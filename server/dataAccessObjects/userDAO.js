"use strict";
var mongoose=require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var UserModel=require('../models/userModel');

function UserDAO() {

	this.addNewUser=function(username,password,email,callback){

		// Generate password hash
        var salt = bcrypt.genSaltSync();
        var password_hash = bcrypt.hashSync(password, salt);

        // Create user document
        var user = {'_id': username, 'password': password_hash};

        // Add email if set
        if (email != "") {
            user['email'] = email;
        }

        var newUser=new UserModel(user);			

			newUser.save(function (err, result) {       

	            if (!err) {
	                console.log("Inserted new user");
                    console.log(result);
	                callback(null, result);
	            }else{
	            	console.log("Error in saving new User ..!!!");
	            	callback(err, null);
	            }	            

	        });
	},//add newUser

	this.validateLogin=function(username,password,callback){
		var user=new UserModel();
		var error={};

		UserModel.findOne({'_id':username},function(err,User){
			if (err){
				return callback(err, null);
			} 

            if (User) {
            	User.isValidUser=true;
                if (bcrypt.compareSync(password, User.password)) {
                    callback(null, User);
                }
                else {
                    var invalid_password_error = new Error("Invalid password");
                    invalid_password_error.invalid_password = true;
                    callback(invalid_password_error, null);
                }
            }else {
                var no_such_user_error = new Error("User: " + user + " does not exist");
                no_such_user_error.no_such_user = true;
                callback(no_such_user_error, null);
            }


		});
	}
}

module.exports=UserDAO;