// Підключаєм модуль express. Це каркас нашого сайту
let express = require('express');
let app = express();

// Створюємо на основі експерусу сервер та підключаєм до нього сокети
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// Модуль щоб у шляхах вірно ставив слеші
let path = require('path');
// Модуль який розпарсює дані які надіслала форма на сервер
let bodyParser = require('body-parser');
// Модуль для роботи з файлами (треба для завантаження файлів на сервер)
let fs = require('fs');

// Підключення до бази данних
let mongodb = require("mongodb");
let mongoClient = mongodb.MongoClient;
let objectId = mongodb.ObjectID;

// Підключення куків та сесій
let Cookies = require( "cookies" );
let session = require('express-session');

//Пілкючення mongoose та налаштування сервера так щоб сесії зберігались в базі даних та не 
// боялись перезавантажень сервера
var mongoose = require("mongoose")
var MongoStore = require('connect-mongo')(session);

var url = "mongodb://localhost:27017/test";
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ 
    url,
  })
}));

// Модуль що допомагає завантажувати файли на сервер
var formidable = require('formidable');
// Підключаєм наш модуль що відповідає за перевірку чи авторизований користувач
const auth = require('./modules/auth');

app.use(bodyParser.urlencoded({ extended: true }))

// Підключення шаблонізатора
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');
 
 // Просто приклад функції що запускається відпрацьовує і запускає наступну фкункцію
app.use((req, res, next)=>{
	//console.log(req.url);
	//console.log('Test function 1');
	next();
});

// Задаємо адресу для статичних файлів. Якщо експрес за адресою знаходить статичний файл
// далі код не підпрацьовує
app.use('/',express.static(path.join(__dirname, 'public')));

// Підключення частини шляхів
let pages = require('./routs/express');
app.use('/1', pages);

// Підключення чату
require('./chat.js')(io);

// Підключення роута з прикладом завантаження файла (сама форма)
app.get('/loadfile', (req, res)=>{
	res.render('loadfile',{title: 'loadfile'});
});

// Сторінка авторизації через фейсбук
app.get('/fb', (req, res)=>{
	res.render('fs',{title: 'fb'});
});

// Роут що приймає дані з форми в першу чергу файли
app.post('/loadfile', (req, res)=>{
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
	  var oldpath = files.filetoupload.path;
	  var newpath = path.join(__dirname, 'loadfiles', files.filetoupload.name);
	  fs.rename(oldpath, newpath, function (err) {
	    if (err) throw err;
	    res.write('File uploaded and moved!');
	    res.end();
	  });
	});
});

// Підлкючення усіх наступних роутів
require('./routs/admin/post')(app, mongoClient, url);
require('./routs/admin/users')(app); 
require('./routs/posts')(app, mongoClient, url);
require('./routs/static')(app);

server.listen(3000, function () {
  console.log('Server listening at port %d', 3000);
});
//app.listen(3001);
