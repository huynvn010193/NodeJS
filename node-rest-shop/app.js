const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRouters = require('./api/routes/orders');

// Routes which should handle requests
app.use('/products',productRoutes);
app.use('/orders',orderRouters);

module.exports = app;