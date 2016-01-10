/**
 * Created by sanju on 12/17/2015.
 */
var express = require('express');
var path = require('path');
var router = express.Router();
var rootPath = path.normalize(__dirname+'../../../');
var viewPath = rootPath + "ui/app/views/";
var partialsPath = viewPath + "partials/";


router.use(express.static(rootPath + '/ui'));

router.get('/partials/*', function(req, res) {
    res.sendFile(partialsPath + req.params[0])
});

router.get('/', function(req, res) {
    console.log(rootPath + '/views/main.html');
    res.sendFile(viewPath + 'main.html');
});

module.exports=router;