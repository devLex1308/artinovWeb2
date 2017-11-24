let express = require('express');
let path = require('path');
let app = express();

app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');


app.use('/',express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
   res.render('index');
  //res.send('test');
});

app.listen(3000);