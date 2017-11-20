var express = require('express');
var path = require('path');
var app = express();



app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');
 
app.use((req, res, next)=>{
	console.log(req.url);
	//console.log('Test function 1');
	next();
});

app.use('/',express.static(path.join(__dirname, 'public')));

// app.get('/', function (req, res) {
//   res.send('Hello World')
// });

app.get('/about', function (req, res) {
   res.render('about');
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

app.get('/user/add', function (req, res) {
  res.render('adduser',{
  	title: 'Add user'
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