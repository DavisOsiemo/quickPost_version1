/**
 * Created by sanju on 12/17/2015.
 */

var express = require('express');
var mongoose=require('mongoose');

var app=express();
var portNumber=5050;

/*mongoose.connect('mongodb://localhost:27017/blogDatabase',function(error,db){

	if(error){
		console.log("Error in connecting database !!! \n"+error);
	}else{
		require('./server/app/express')(app,db);

		app.listen(portNumber,function(){
		   console.log("Mean_Blog app running on port :"+portNumber);
		});
	}	

});*/

require('./server/app/express')(app);

		app.listen(portNumber,function(){
		   console.log("Mean_Blog app running on port :"+portNumber);
		});

