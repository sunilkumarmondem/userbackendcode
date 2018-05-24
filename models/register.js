var mongoose =require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema; 

var Registerschema = new Schema({
	name:{type:String},
	email:{type:String,required:true},
	username:{type:String,required:true},
	password:{type:String,required:true}
}) 

var Register =mongoose.model('registerusers',Registerschema);
module.exports=Register;

module.exports.adduser = function(newuser,callback){
	bcrypt.genSalt(10,function(err,salt){
		if(err) throw err;
		bcrypt.hash(newuser.password,salt,function(err,hash){
			newuser.password=hash;
			newuser.save(callback);
		})
	})
};

module.exports.getuserbyid = function(id,callback){
	Register.findById(id,callback);
};

module.exports.getuserbyusername=function(username,callback){
	const query ={username:username};
	Register.findOne(query,callback);
};

module.exports.comparepassword=function(password,hashpassword,callback){
	bcrypt.compare(password,hashpassword,function(err,isMatch){
		if(err) throw err;
		callback(null,isMatch);
	})
};