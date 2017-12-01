let express = require('express');
let path = require('path');
let app = express();
let bodyParser = require('body-parser');
let fs = require('fs');
let mongoClient = require("mongodb").MongoClient;
let objectId = require("mongodb").ObjectID;
let Cookies = require( "cookies" );
let session = require('express-session');

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

var url = "mongodb://localhost:27017/test";


// Authentication and Authorization Middleware
const auth = function(req, res, next) {
  if (true || req.session && req.session.login)
    return next();
  else
    return res.sendStatus(401);
};

app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');
 
app.use((req, res, next)=>{
	//console.log(req.url);
	//console.log('Test function 1');
	next();
});

app.use('/',express.static(path.join(__dirname, 'public')));

// app.get('/', function (req, res) {
//   res.send('Hello World')
// });

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

app.get('/aftorization', function (req, res) {
  res.render('adduser',{
  	title: 'Вхід на сайт'
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

app.get('/admin',auth, function (req, res) {
   res.render('admin/start',{
      title: 'Test admin'
    });
});


app.get('/admin/post/add',auth, function (req, res) {
   res.render('admin/addPost',{
      title: 'Add post'
    });
});

app.post('/admin/post/add',auth, function (req, res) {
   const {postTitle, description, post} = req.body;
   console.log(postTitle, description, post);

   const onePost = {
      title: postTitle,
      description,
      post,
   }; 

   mongoClient.connect(url, function(err, db){
        db.collection("posts").insertOne(onePost, function(err, result){
             
            if(err) return res.status(400).send();

            db.close();
            res.redirect('/admin/post/add');
        });
    });
});

app.get('/admin/posts',auth, function (req, res) {
  mongoClient.connect(url, function(err, db){
        db.collection("posts").find({}).toArray(function(err, posts){
            res.render('admin/posts',{
          title: 'Всі пости',
          posts
       });
            console.log(posts);
            db.close();
        });
    });

});

app.get('/admin/post/edit/:id' ,auth, function (req, res) {

  var id = new objectId(req.params.id);
    mongoClient.connect(url, function(err, db){
        db.collection("posts").findOne({_id: id}, function(err, post){
             
             console.log(post);
            if(err) return res.status(400).send();
             
            db.close();

            res.render('admin/editPost',{
            title: 'Edit post',
            post,
        });
        });
    });
 
});

app.post('/admin/post/edit/:id' ,auth, function (req, res) {
  if(!req.body) return res.sendStatus(400);
  var id = new objectId(req.params.id);
    const {postTitle, description, post} = req.body;

   const onePost = {
      title: postTitle,
      description,
      post,
    }; 
    mongoClient.connect(url, function(err, db){
        db.collection("posts").findOneAndUpdate({_id: id}, { $set: onePost},
             {returnOriginal: false },function(err, result){
             
             console.log("result = ", result);
            if(err) return res.status(400).send();
             
            var user = result.value;
            db.close();
            res.redirect('/admin/posts');
        });
    });

});

app.get('/post/:id' ,auth, function (req, res) {

  var id = new objectId(req.params.id);
    mongoClient.connect(url, function(err, db){
        db.collection("posts").findOne({_id: id}, function(err, post){
             
             console.log(post);
            if(err) return res.status(400).send();
             
            db.close();

            res.render('post/post',{
            title: post.title,
            post,
        });
        });
    });
 
});

app.get('/posts', function (req, res) {
  mongoClient.connect(url, function(err, db){
        db.collection("posts").find({}).toArray(function(err, posts){
            res.render('post/all',{
          title: 'Всі пости',
          posts
       });
            db.close();
        });
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


app.listen(3001);
