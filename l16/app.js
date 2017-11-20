let express = require('express');
let path = require('path');
let app = express();
let bodyParser = require('body-parser');
let fs = require('fs');


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

app.get('/user/edit/:id', function (req, res) {

  load((error, data)=>{
 		if(error) {
 			res.send('Error 500 server not work!');
 		}
 		
 		let userId = req.params.id;
 		let user = data.data.find((item)=>{
 			return item.id == userId
 		});

 		res.render('edituser',{
	  		title: 'All user',
	  		user,
	  	});

 	});
});

app.post('/user/edit/:id', function (req, res) {
  console.log(req.body);
  const {login, pass} = req.body;
 	
 	load((error, data)=>{
 		if(error) {
 			res.send('Error 500 server not work!');
 		}

 		let userId = req.params.id;
 		let userIndex = null;
 		let user = data.data.find((item, index) => {
 			if(item.id == userId){
 				userIndex = index;
 			}
 			return item.id == userId
 		});

 		data.data[userIndex] = {
 			...user,
 			login,
 			pass,
 		} 
 		console.log(userIndex, user);

 		save(data, (error)=>{
 			if(error){
 				res.send('Error 500 server not work!');
 			}

 			res.redirect('/users');
 		});
 	});

});


app.get('/users', function (req, res) {
  
  load((error, data)=>{
 		if(error) {
 			res.send('Error 500 server not work!');
 		}

 	 res.render('allUser',{
	  	title: 'All user',
	  	data: data.data,
	  });

 	});
});

app.post('/user/add', function (req, res) {
  console.log(req.body);
  const {login, pass} = req.body;
 	
 	load((error, data)=>{
 		if(error) {
 			res.send('Error 500 server not work!');
 		}

 		data.index = parseInt(data.index) + 1;

 		data.data.push({id: data.index, login, pass });

 		save(data, (error)=>{
 			if(error){
 				res.send('Error 500 server not work!');
 			}

 			res.redirect('/user/add');
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


function load(done){
	
	fs.readFile('db.txt', 'utf-8', (error, data) => {
		if(error){
			done('Неможливо прочитати файл');
		}

		let rez = null;
		try{
			rez = JSON.parse(data);
			done(null, rez);
		}catch(e){
			done('Неможливо розпарсити стрічку');
		}

	});
}

function save(data, done){
	let stringRez = JSON.stringify(data);
	fs.writeFile("db.txt", stringRez, (error) => {

		if(error){
			done('Неможливо записати файл');
		}

		done(null);
	});
}