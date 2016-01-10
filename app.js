/**
 * Created by sanju on 12/17/2015.
 */

var express = require('express');
var mongoose=require('mongoose');

var app=express();
var portNumber=5050;

require('./server/app/express')(app);

app.listen(portNumber,function(){
		   console.log("Mean_Blog app running on port :"+portNumber);
});

