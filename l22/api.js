var mongoose = require('mongoose')
var crypto = require('crypto')
var db = mongoose.connect("mongodb://localhost:27017/test")
var User = require('./db/models/User.js')

// User API

exports.createUser = function(userData){
	var user = {
		login: userData.login,
		pass: hash(userData.pass)
	}
	return new User(user).save()
}

exports.getUser = function(id) {
	return User.findOne(id)
}

exports.checkUser = function(userData) {
	return User
		.findOne({login: userData.login})
		.then(function(doc){
			if ( doc.pass == hash(userData.pass) ){
				console.log("User password is ok");
				return Promise.resolve(doc)
			} else {
				return Promise.reject("Error wrong")
			}
		})
}

function hash(text) {
	return crypto.createHash('sha1')
	.update(text).digest('base64')
}