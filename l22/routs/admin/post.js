const auth = require('../../modules/auth');
let mongodb = require("mongodb");
let objectId = mongodb.ObjectID;

module.exports = (app, mongoClient, url) => {

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
	          posts,
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

}