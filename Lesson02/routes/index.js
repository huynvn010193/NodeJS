var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HomePage' });
});

/* GET Dashboard page*/
router.get('/dashboard', function(req, res, next) {
  res.render('page/dashboard/index', { pageTitle: 'Dashboard Page','courseName':'<p>NodeJS</p>' });
});

module.exports = router;
