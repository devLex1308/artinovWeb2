let express = require('express');
let path = require('path');
let app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

let bodyParser = require('body-parser');
let fs = require('fs');
let mongodb = require("mongodb");
let mongoClient = mongodb.MongoClient;
let objectId = mongodb.ObjectID;
let Cookies = require( "cookies" );
let session = require('express-session');

var mongoose = require("mongoose")
var MongoStore = require('connect-mongo')(session);

var formidable = require('formidable');

var url = "mongodb://localhost:27017/test";
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ 
    url,
  })
}));

// Authentication and Authorization Middleware
const auth = require('./modules/auth');

app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');
 
app.use((req, res, next)=>{
	//console.log(req.url);
	//console.log('Test function 1');
	next();
});

app.use('/',express.static(path.join(__dirname, 'public')));

let pages = require('./routs/express');
app.use('/1', pages);

require('./chat.js')(io);

app.get('/loadfile', (req, res)=>{
	res.render('loadfile',{title: 'loadfile'});
});

app.post('/loadfile', (req, res)=>{
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
	  var oldpath = files.filetoupload.path;
	  var dateAndTyme = new Date();
	  var minutes = dateAndTyme.getMinutes();
	  var seconds = dateAndTyme.getSeconds();
	  console.log("dateAndTyme=",dateAndTyme);
	  //console.log("files.filetoupload.name = ", files.filetoupload);
	  let nameArray = files.filetoupload.name.split('.');
	  var newpath = path.join(__dirname, 'loadfiles', `${minutes}-${seconds}.${nameArray[1]}`);
	  fs.rename(oldpath, newpath, function (err) {
	    if (err) throw err;
	    res.write('File uploaded and moved!');
	    res.end();
	  });
	});
});

require('./routs/admin/post')(app, mongoClient, url);
require('./routs/admin/users')(app); 
require('./routs/posts')(app, mongoClient, url);
require('./routs/static')(app);

server.listen(3000, function () {
  console.log('Server listening at port %d', 3000);
});
//app.listen(3001);
