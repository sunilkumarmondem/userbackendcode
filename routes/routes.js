var express = require('express');
var router = express.Router();
var Group = require('../models/group');
var List = require('../models/user');

router.post('/addgroup',function(req,res){
	var group = new Group(req.body);
	group.save().then(function(data){
		res.send(data);
	})

});

router.get('/groups',function(req,res){
	Group.find({}).then(function(data){
		res.send(data);
	})
});

router.get('/groups/:id',function(req,res){
	Group.findById({_id:req.params.id}).then(function(data){
		res.send(data);
	})
});

router.put('/groups/:id',function(req,res){
	Group.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
		Group.findOne({_id:req.params.id}).then(function(data){
			res.send(data);
		})
	})
});


router.delete('/groups/:id',function(req,res){
	Group.findByIdAndRemove({_id:req.params.id}).then(function(data){
		res.send(data);
	})
});

router.post('/adduser',function(req,res){
	var user = new List(req.body);
	user.save().then(function(data){
		res.send(data);
	})

});

router.get('/users',function(req,res){
	List.find({}).then(function(data){
		res.send(data);
	})
});

router.get('/users/:id',function(req,res){
	List.findById({_id:req.params.id}).then(function(data){
		res.send(data);
	})
});

router.get('/users_group/:gnm',function(req,res){
	List.find({group:req.params.gnm}).then(function(data){
		res.send(data);
	})
});

router.put('/users/:id',function(req,res){
	List.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
		List.findOne({_id:req.params.id}).then(function(data){
			res.send(data);
		})
	})
});

router.delete('/users/:id',function(req,res){
	List.findByIdAndRemove({_id:req.params.id}).then(function(data){
		res.send(data);
	})
});













module.exports=router;

