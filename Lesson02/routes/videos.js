var express = require('express');
var router = express.Router();

router.get('/list', function(req, res, next) {
  res.send('List video');
});

router.get('/add', function(req, res, next) {
  res.send('Add Video');
});

router.get('/edit', function(req, res, next) {
  res.send('Edit Video');
});

module.exports = router;
