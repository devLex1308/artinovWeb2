var express = require('express')
var router = express.Router();

router.get('/info', function (req, res) {
	res.send('info');
});

module.exports = router