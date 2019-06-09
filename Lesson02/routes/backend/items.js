var express = require('express');
var router = express.Router();

const ItemModel = require('../../schemas/items');

router.get('/', (req, res, next) => {
  let statusFilter = [
    {name: 'All', value:'all', count: 1, link:'#', class: 'default'},
    {name: 'Active', value:'active', count: 2, link:'#', class: 'success'},
    {name: 'InActive', value:'inactive', count: 3, link:'#', class: 'warning'}
  ];

  statusFilter.forEach((item,index) => {
    let condition = item.value !== "all" ? {status: item.value}:{};
    ItemModel.count(condition).then((data) => {
      statusFilter[index].count = data;
    });
  })
  
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
