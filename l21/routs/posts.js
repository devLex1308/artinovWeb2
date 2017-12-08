

module.exports = (app, mongoClient, url) => {

  app.get('/post/:id', function (req, res) {

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

}