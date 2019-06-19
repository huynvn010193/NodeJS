var express = require('express');
var router = express.Router();

const ItemModel = require('../../schemas/items');
const UtilsHelpers = require('./../../helpers/utils');

router.get('/', (req, res, next) => {
  let statusFilter = UtilsHelpers.createFilterStatus();
  ItemModel.find({ }).then((items) => {
    res.render('page/items/list', { 
      pageTitle: 'Item List Page',
      items: items,
      statusFilter: statusFilter
    });
  });
  
});

router.get('/add', (req, res, next) => {
  res.render('page/items/add', { pageTitle: 'Item Add Page' });
});

module.exports = router;
