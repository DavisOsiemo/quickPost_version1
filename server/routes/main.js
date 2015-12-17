/**
 * Created by sanju on 12/17/2015.
 */
var express = require('express');
var path = require('path');
var router = express.Router();
var rootPath = path.normalize(__dirname+'../../../');
var viewPath = rootPath + "ui/app/views/";
var partialsPath = viewPath + "partials/";

console.log(rootPath);
console.log(viewPath);
console.log(partialsPath);

router.use(express.static(rootPath + '/ui'));

router.get('/partials/*', function(req, res) {
    console.log('partials reached');
    res.sendFile(partialspath + req.params[0])
});

router.get('/', function(req, res) {
    console.log(rootPath + '/views/main.html');
    console.log('grocery reached');
    res.sendFile(viewPath + 'main.html');
});

module.exports=router;