/**
 * Created by sanju on 12/17/2015.
 */
var express = require("express");
var bodyparser = require('body-parser');
var cookieparser = require('cookie-parser');
var session = require('express-session');
var serveStatic = require('serve-static')
var path = require('path');
var rootPath = path.normalize(__dirname + '../../../');




// Custom Routes declaration
var mainRouter=require('../routes/main');



module.exports=function(app){

    console.log("In server..!!!");
    app.use(cookieparser());
    app.use(bodyparser.json());
    app.use(serveStatic(rootPath+'/ui'));

    //Router registration
    app.use('/home',mainRouter);

}


