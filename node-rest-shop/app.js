const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRouters = require('./api/routes/orders');

app.use('/products',productRoutes);
app.use('/orders',orderRouters);

module.exports = app;