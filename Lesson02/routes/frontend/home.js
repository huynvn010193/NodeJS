var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('page/publish/index', { pageTitle: 'Publish' });
});

module.exports = router;
