var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var sessionModel=new Schema({
	_id:{type:String},
	username:{type:String}
});

module.exports=mongoose.model('session',sessionModel);