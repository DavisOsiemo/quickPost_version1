var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userModel=new Schema({
	_id:{type:String},
	password:{type:String},
	email:{type:String}
});

module.exports=mongoose.model('User',userModel);