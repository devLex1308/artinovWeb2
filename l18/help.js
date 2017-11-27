res.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);

var cookieParser = require('cookie-parser')
req.cookies

var Cookies = require( "cookies" );


var express = require('express'),
    app = express(),
    session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));
 
// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user === "amy" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};
 
// Login endpoint
app.get('/login', function (req, res) {
  if (!req.query.username || !req.query.password) {
    res.send('login failed');    
  } else if(req.query.username === "amy" || req.query.password === "amyspassword") {
    req.session.user = "amy";
    req.session.admin = true;
    res.send("login success!");
  }
});
 
// Logout endpoint
app.get('/logout', function(req, res) {
  req.session.destroy();
  res.send("logout success!");
});
 
// Get content endpoint
app.get('/content', auth, function (req, res) {
    res.send("You can only see this after you've logged in.");
});
 
app.listen(3000);
console.log("app running at http://localhost:3000");

/*ТУТ БУДУТЬ ВСІ ЗАПРОСИ ДО СЕРВЕРА*/


$.ajax({

    cache: false,
    timeout: TIME_FOR_SEND_RESALT,
    url: server,//SERVER_NAME,
    type: "POST",
    data: {},


    beforeSend: function () {
    },
    
    success: function (data, textStatus, jqXHR) {

        var arr;

        try {
            arr = JSON.parse(data);
        
            if (arr['error'] != undefined) {

            } else {

            }


        }catch (e) {
        
            if (arr['error'] != undefined) {
               
            }else{
                
            }

        }

    },

    complete: function (jqXHR, textStatus) {

    }

    error: function (data) {
        console.log(data);
    },

});
