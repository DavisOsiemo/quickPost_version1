"use strict";
var mongoose=require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var User=require('../models/user');

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

        var newUser=new User(user);
			

			newUser.save(function (err, result) {       

	            if (!err) {
	                console.log("Inserted new user");
	                callback(null, result[0]);
	            }else{
	            	console.log("Error in saving new User ..!!!");
	            	callback(err, null);
	            }	            

	        });
	}
}

module.exports=UserDAO;