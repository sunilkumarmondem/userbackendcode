var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var groupschema = new Schema({
	name:{type:String}

	
})

var Group =mongoose.model('group',groupschema);
module.exports=Group;