const auth = require('../../modules/auth');
let mongodb = require("mongodb");
let objectId = mongodb.ObjectID;
let User = require("../../db/models/User");

var crypto = require('crypto')
function hash(text) {
	return crypto.createHash('sha1')
	.update(text).digest('base64')
}

module.exports = (app) => {

	app.get('/users',auth, function (req, res) {

		User.find({},(err, users) => {  
		    if (err) {
		        res.status(500).send(err)
		    } else {
		         res.render('allUser',{
				  	title: 'All user',
				  	data: users,
				 });
		    }
		});

	  // mongoClient.connect(url, function(err, db){
	  //       db.collection("users").find({}).toArray(function(err, users){
	  //           res.render('allUser',{
			// 	  	title: 'All user',
			// 	  	data: users,
			// 	 });
	  //           db.close();
	  //       });
	  //   });

	});

	app.get('/user/edit/:id', auth, function (req, res) {

		var id = new objectId(req.params.id);

		User.findOne({_id: id},(err, user) => {  
			console.log(user);
		    if (err) {
		        res.status(500).send(err)
		    } else {
		         res.render('edituser',{
			  		title: 'Edit user',
			  		user,
		  		});
		    }
		});

	    // mongoClient.connect(url, function(err, db){
	    //     db.collection("users").findOne({_id: id}, function(err, user){
	             
	    //         console.log(user);
	    //         if(err) return res.status(400).send();
	             
	    //         db.close();

	    //         res.render('edituser',{
			  // 		title: 'Edit user',
			  // 		user,
		  	// 	});
	    //     });
	    // });
	 
	});

	app.post('/user/edit/:id', auth, function (req, res) {
		if(!req.body) return res.sendStatus(400);
		const {login, pass} = req.body;
		const id = new objectId(req.params.id);

		User.findOne({_id: id}, (err, user) => {  
			console.log(user);
		    if (err) {
		        res.status(500).send(err)
		    } else {
		    	user.login = login || user.login;
		        user.pass = hash(pass) || user.pass;

		        user.save((err, user) => {
		            if (err) {
		                res.status(500).send(err)
		            }
		            res.redirect('/users');
		        });
		    }
		});

	 // var id = new objectId(req.params.id);
	 //    const {login, pass} = req.body;
	     
	 //    mongoClient.connect(url, function(err, db){
	 //        db.collection("users").findOneAndUpdate({_id: id}, { $set: {login, pass}},
	 //             {returnOriginal: false },function(err, result){
	             
	 //             console.log("result = ", result);
	 //            if(err) return res.status(400).send();
	             
	 //            var user = result.value;
	 //            db.close();
	 //            res.redirect('/users');
	 //        });
	 //    });

	});

	app.get('/user/delete/:id',auth, function (req, res) {

		var id = new objectId(req.params.id);

		User.findByIdAndRemove({_id: id},(err, users) => {  
		    if (err) {
		        res.status(500).send(err)
		    } else {
		         res.redirect('/users');
		    }
		});

	    // mongoClient.connect(url, function(err, db){
	    //     db.collection("users").findOneAndDelete({_id: id}, function(err, result){
	             
	    //         if(err) return res.status(400).send();

	    //         db.close();
	    //         res.redirect('/users');
	    //     });
	    // });
	});

	app.post('/user/deleteajax/:id', auth, function (req, res) {

		var id = new objectId(req.params.id);
	    mongoClient.connect(url, function(err, db){
	        db.collection("users").findOneAndDelete({_id: id}, function(err, result){
	             
	            if(err) return res.status(400).send();
	             
	            db.close();
	            let result1 = {
	            	resalt: true
	            };
	            res.send(200, JSON.stringify(result1));
	        });
	    });
	});

}