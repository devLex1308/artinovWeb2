let Cookies = require( "cookies" );
const auth = require('../modules/auth');
var api = require('../api.js');

module.exports = (app) => {

	app.get('/about', function (req, res) {
		
		var cookies = new Cookies( req, res); 
		cookies.set( "name", "Lex", { httpOnly: false, maxAge: 9999 } )
			res.render('about', {
			title: 'about',
			content: 'about content',
		});
	});

	app.get('/info', function (req, res) {
	  res.render('info');
	});

	app.get('/help', function (req, res) {
	  res.render('page',{
	  	title: 'help',
	  	content: 'Content help'
	  });
	});

	app.get('/contact', function (req, res) {
	  res.render('page',{
	  	title: 'contact',
	  	content: 'Content contact'
	  });
	});

	app.get('/map', function (req, res) {
	  res.render('map',{
	  	title: 'Map',
	  	content: 'Content map'
	  });
	});

	app.get('/map2', function (req, res) {
	  res.render('map2',{
	  	title: 'Map 2',
	  	content: 'Content map'
	  });
	});

	app.get('/login', function (req, res) {
	  if (req.session.user) return res.redirect('/')
	  res.render('adduser',{
	  	title: 'Вхід на сайт'
	  });
	});

	app.post('/login', function (req, res) {
  
		if (req.session.user) return res.redirect('/')

		api.checkUser(req.body)
			.then(function(user){
				if(user){
					req.session.user = {id: user._id, login: user.login}
					res.redirect('/')
				} else {
					return next(error)
				}
			})
			.catch(function(error){
				res.send(400, error);
				//return next(error)
			});

	});

	app.get('/logout', function(req, res) {
	  	if (req.session.user) {
			delete req.session.user;
			res.redirect('/')
		}
	});



	app.get('/registration', function (req, res) {
	  res.render('adduser',{
	  	title: 'Add user'
	  });
	});

	app.post('/registration', function (req, res) {
		api.createUser(req.body)
		  	.then(function(result){
		  		console.log("User created");
		  		res.redirect('/');
		  	})
		  	.catch(function(err){
		  		if (err.toJSON().code == 11000){
		  			res.status(500).send("This login already exist")
		  		}
		  	})
	});



	app.get('/admin',auth, function (req, res) {
	   res.render('admin/start',{
	      title: 'Test admin'
	    });
	});

	app.get('/chat', function (req, res) {
	  mongoClient.connect(url, function(err, db){
	        db.collection("chat").find({}).toArray(function(err, mesages){
	            console.log(mesages);
	            res.render('post/chat',{
	                title: 'Чат',
	                mesages
	             });
	            db.close();
	        });
	    });
	});

	app.post('/chat', function (req, res) {
	   const {sms} = req.body;
	   const date = new Date();
	   const user = req.session.login || 'Анонім';
	   mongoClient.connect(url, function(err, db){
	        db.collection("chat").insertOne({user, date, sms}, function(err, result){
	             
	            if(err) return res.status(400).send();

	            db.close();
	            res.redirect('/chat');
	        });
	    });

	});

	app.post('/chatajaxdata', function (req, res) {
	   mongoClient.connect(url, function(err, db){
	        db.collection("chat").find({}).toArray(function(err, mesages){
	            res.send(200, JSON.stringify(mesages))
	            db.close();
	        });
	    });

	});

	app.post('/chatajax', function (req, res) {
	   const {sms} = req.body;
	   const date = new Date();
	   const user = req.session.login || 'Анонім';

	   mongoClient.connect(url, function(err, db){
	        db.collection("chat").insertOne({user, date, sms}, function(err, result){
	             
	            if(err) return res.status(400).send();

	            db.close();
	            res.send(200, `${sms} ${date} ${user}`)
	        });
	    });

	});


	app.get('/chatio', function (req, res) {
	    const nickname = req.session.user && req.session.user.login ? req.session.user.login : '';
	    res.render('chat',{
	    	nickname ,
	    });
	});

	app.use((req, res, next)=>{
		console.log(req.url);
		res.send('Error 404 not found!');
		next();
	});

	app.use((error, req, res, next)=>{
		console.log(error);
		console.log(req.url);
		res.send('Error 500 server not work!');
		next();
	});

}