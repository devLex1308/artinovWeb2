var express = require('express')
var router = express.Router();

router.get('/info2', function (req, res) {
	res.render('info',{title: 'info'});
});

module.exports = router