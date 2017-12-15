require('./router/other')(app);
require('./router/admin')(app, mongoClient, url);
require('./router/user')(app, mongoClient, url);

const auth = require('../module/auth');

module.exports = app => {

}
// var express = require('express')
// var router = express.Router();
// module.exports = router

// let user = require('./router/user');
// app.use('/', user);



https://www.npmjs.com/package/express-generator
-e

https://developers.facebook.com/docs/facebook-login/web/
https://developers.facebook.com/docs/graph-api/reference/user
https://developers.facebook.com

https://www.bitvise.com/ssh-client-download