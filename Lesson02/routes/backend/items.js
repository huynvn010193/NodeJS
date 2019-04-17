var express = require('express');
var router = express.Router();

const ItemModel = require('../../schemas/items');

router.get('/', (req, res, next) => {
  ItemModel.find({ }).then((items) => {
    res.render('page/items/list', { 
      pageTitle: 'Item List Page',
      items: items
    });
  });
  
});

router.get('/add', (req, res, next) => {
  res.render('page/items/add', { pageTitle: 'Item Add Page' });
});

module.exports = router;
