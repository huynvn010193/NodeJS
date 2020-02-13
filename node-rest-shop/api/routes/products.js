const express = require('express');
const router = express.Router();

const Product = require('../models/product');
const mongoose = require('mongoose');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /product'
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
    });
    product
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'Handling POST request to /product',
                createdProduct: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
   
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        if(doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({
                message: 'No valid entry found for provider ID'
            })
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    })
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Update product',
        id: id
    })
});


router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Delete product',
        id: id
    })
});


module.exports = router;
