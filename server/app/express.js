/**
 * Created by sanju on 12/17/2015.
 */
var express = require("express");
var bodyparser = require('body-parser');
var cookieparser = require('cookie-parser');
var session = require('express-session');
var serveStatic = require('serve-static')
var path = require('path');
var mongoose=require('mongoose');
var rootPath = path.normalize(__dirname + '../../../');



// Custom Routes declaration
var mainRouter=require('../routes/main');
var userRouter=require('../routes/user')



module.exports=function(app){

	mongoose.connect('mongodb://localhost:27017/blogDatabase',function(error,db){
		if(error){
			console.log("Error in connecting database ..!!\n\n"+error);
		}else{
			console.log("Connected to database successfully !!!");

			app.use(bodyparser.urlencoded({ extended: true }));	 
		    app.use(cookieparser());
		    app.use(bodyparser.json());
		    app.use(serveStatic(rootPath+'/ui'));

		    //Router registration
		    app.use('/home',mainRouter);
		    app.use('/user',userRouter);

		}

	});	

}


