var express = require('express');
var router = express.Router();

const ItemModel = require('../../schemas/items');

router.get('/', (req, res, next) => {
  let statusFilter = [
    {name: 'All', count: 1, link:'#', class: 'default'},
    {name: 'Active', count: 2, link:'#', class: 'success'},
    {name: 'InActive', count: 3, link:'#', class: 'warning'}
  ];
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
