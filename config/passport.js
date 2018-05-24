var JwtStrategy = require('passport-jwt').Strategy;
var  ExtractJwt = require('passport-jwt').ExtractJwt;
var Register = require('../models/register');
var secret =require('./secret')


module.exports = function(passport){
	let opts={};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	opts.secretOrKey = secret.secret;
	passport.use(new JwtStrategy(opts,(jwt_payload,done)=>{
		console.log(jwt_payload);
		Register.getuserbyid(jwt_payload.data._id,function(err,user){
			if(err){
				return done(err,false);
			}
			if(user){
				return done(null,user);
			}else{
				return done(null,false);
			}
		});
	}));
};


