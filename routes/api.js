var express =require('express');
var router =express.Router();
var Register =require('../models/register');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var secret =require('../config/secret')
router.post('/register',function(req,res){
	let newuser = new Register({
		name:req.body.name,
		email:req.body.email,
		username:req.body.username,
		password:req.body.password
	});
	Register.adduser(newuser,function(err,user){
		if(err){
			res.json({success:false, msg:'Failed to register user'});
		}
		else{
			res.json({success:true, msg:'user registered'});
		
		}
	})

})

router.post('/authenticate',function(req,res){
	var username = req.body.username;
	var password = req.body.password;

	Register.getuserbyusername(username,function(err,user){
		if(err) throw err;
		if(!user){
			return res.json({success:false, msg:'user not found'});
		}
		Register.comparepassword(password,user.password,function(err,isMatch){
			if(err) throw err;
			if(isMatch){
				const token = jwt.sign({data:user},secret.secret,{
					expiresIn:604800
				});
				res.json({success:true, token:'Bearer ' + token ,user:{id:user._id,name:user.name,email:user.email}});
			}
			else{
				return res.json({success:false, msg:'wrong password'});
			}
		})
	})
});

router.get('/profile',passport.authenticate('jwt',{session:false}),function(req,res){
	res.json({user:req.user});
});



module.exports=router;