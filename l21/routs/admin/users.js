const auth = require('../../modules/auth');

module.exports = (app, mongoClient, url) => {

	app.get('/user/delete/:id', function (req, res) {

		var id = new objectId(req.params.id);
	    mongoClient.connect(url, function(err, db){
	        db.collection("users").findOneAndDelete({_id: id}, function(err, result){
	             
	            if(err) return res.status(400).send();
	             
	            //var user = result.value;
	            //res.send(user);
	            db.close();
	            res.redirect('/users');
	        });
	    });
	});

	app.post('/user/deleteajax/:id', function (req, res) {

		var id = new objectId(req.params.id);
	    mongoClient.connect(url, function(err, db){
	        db.collection("users").findOneAndDelete({_id: id}, function(err, result){
	             
	            if(err) return res.status(400).send();
	             
	            //var user = result.value;
	            //res.send(user);
	            db.close();
	            let result1 = {
	            	resalt: true
	            };
	            res.send(200, JSON.stringify(result1));
	        });
	    });
	});

	app.post('/user/edit/:id', function (req, res) {
	  	console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!s');
		if(!req.body) return res.sendStatus(400);
		var id = new objectId(req.params.id);
	    const {login, pass} = req.body;
	     
	    mongoClient.connect(url, function(err, db){
	        db.collection("users").findOneAndUpdate({_id: id}, { $set: {login, pass}},
	             {returnOriginal: false },function(err, result){
	             
	             console.log("result = ", result);
	            if(err) return res.status(400).send();
	             
	            var user = result.value;
	            db.close();
	            res.redirect('/users');
	        });
	    });

	});


	app.get('/users',auth, function (req, res) {
	  
		// var cookies = new Cookies( req, res); 
		// if(!cookies.get('isAmin')) {
		// 	res.redirect('/');
		// }

	  mongoClient.connect(url, function(err, db){
	        db.collection("users").find({}).toArray(function(err, users){
	            res.render('allUser',{
				  	title: 'All user',
				  	data: users,
				 });
	            db.close();
	        });
	    });

	});

	app.post('/user/add', function (req, res) {

	  

	  if(!req.body) return res.sendStatus(400);
	     
	    const {login, pass} = req.body;
	    var user = {login, pass};
	     
	    mongoClient.connect(url, function(err, db){
	        db.collection("users").insertOne(user, function(err, result){
	             
	            if(err) return res.status(400).send();

	            db.close();
	            res.redirect('/users');
	        });
	    });

	});

	app.get('/user/edit/:id', function (req, res) {

	var id = new objectId(req.params.id);
    mongoClient.connect(url, function(err, db){
        db.collection("users").findOne({_id: id}, function(err, user){
             
             console.log(user);
            if(err) return res.status(400).send();
             
            db.close();

            res.render('edituser',{
		  		title: 'Edit user',
		  		user,
	  		});
        });
    });
 
});

}