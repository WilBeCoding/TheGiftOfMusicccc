var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	req.session.user = req.session.user_email
	user = req.session.user
	// console.log(user)
  res.render('index', { title: 'Express', user:user });
});

module.exports = router;
