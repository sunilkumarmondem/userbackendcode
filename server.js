var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var mongoose = require('mongoose');
mongoose.Promise =global.Promise;
mongoose.connect('mongodb://sunil1:sunil1@ds129560.mlab.com:29560/management1');

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
var routes = require('./routes/api');
var routes1 = require('./routes/routes');





app.use(routes);
app.use(routes1);
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.redirect('/');
});﻿



var port= process.env.PORT || 8080;

app.listen(port,function(){
	console.log('server started');
})



