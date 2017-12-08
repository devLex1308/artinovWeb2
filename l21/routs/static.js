let Cookies = require( "cookies" );
const auth = require('../modules/auth');

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

	app.post('/aftorization', function (req, res) {
  
	if(!req.body) return res.sendStatus(400);
    const {login, pass} = req.body;

  mongoClient.connect(url, function(err, db){
        db.collection("users").findOne({login, pass}, function(err, user){
             
             console.log(user);
            if(err) return res.status(400).send();
             
            if(user){
            	var cookies = new Cookies( req, res); 
            	req.session.login = user.login;
    			    req.session.admin = true;
            }

            db.close();

            res.redirect('/');
        });
    });
});

	app.get('/logout', function(req, res) {
	  req.session.destroy();
	  res.redirect('/');
	});



	app.get('/user/add', function (req, res) {
	  res.render('adduser',{
	  	title: 'Add user'
	  });
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
	 
	    res.render('post/chat2',{
	        title: 'Чат 2',
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

	

	app.get('/aftorization', function (req, res) {
	  res.render('adduser',{
	  	title: 'Вхід на сайт'
	  });
	});

}