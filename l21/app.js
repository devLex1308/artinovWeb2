let express = require('express');
let path = require('path');
let app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

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


require('./routs/static')(app);
require('./routs/admin/post')(app, mongoClient, url);
require('./routs/admin/users')(app, mongoClient, url); 
require('./routs/posts')(app, mongoClient, url);

let pages = require('./routs/express');
app.use('/1/', pages);
 


io.on('connection', function(){ 
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});


app.listen(3001);
