var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Eddie\'s super fun app', body:'I\'m a super fun app! I don\'t actually do anything yet, I\'m simply here as a test.'  });
});

module.exports = router;
