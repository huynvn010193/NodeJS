const ItemModel = require("./../schemas/items");
let createFilterStatus = () => {
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
	});
	
	return statusFilter;
}

module.exports = {
	createFilterStatus: createFilterStatus
}