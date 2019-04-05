var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('page/items/list', { pageTitle: 'Item List Page' });
});

router.get('/add', function(req, res, next) {
  res.render('page/items/add', { pageTitle: 'Item Add Page' });
});

module.exports = router;
