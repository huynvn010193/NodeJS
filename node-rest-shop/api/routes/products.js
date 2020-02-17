const express = require('express');
const router = express.Router();

const Product = require('../models/product');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    Product.find()
    .select("name price _id")
    .exec()
    .then(docs =>  {
        const response = {
            count: docs.length,
            products: docs.map(doc => {
                return {
                    name: doc.name,
                    price: doc.price,
                    _id: doc._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:8080/products/' + doc._id
                    }
                }
            })
        }
        res.status(200).json(response);
        // if(docs.length >= 0) {
        //     res.status(200).json(docs);
        // } else {
        //     res.status(404).json({
        //         message: "No entries found"
        //     })
        // }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
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
                message: 'Create product susscessfully',
                createdProduct: {
                    name: result.name,
                    price: result.price,
                    _id: result._id,
                    request: {
                        type: 'POST',
                        url: 'http://localhost:8080/products/' + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
   
});

router.get('/:productId',(req, res, next) => {
    const id = req.params.productId;
    if(mongoose.Types.ObjectId.isValid(id)) {
        Product.findById(id)
        .select('name price _id')
        .exec()
        .then(doc => {
            console.log(doc);
            if(doc) {
                console.log("OK");
                res.status(200).json({
                    product: doc,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:8080/products'
                    }
                });
            } else {
                console.log("fail");
                res.status(404).json({
                    message: 'No valid entry found for provider ID'
                })
            }
        })
        .catch(err => {
            console.log("catch");
            res.status(500).json({error: err})
        })
    } else {
        res.status(404).json({
            message: 'Please provide correct Id type MongoDB'
        })
    }
    
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for(const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Product updated',
            request: {
                type: 'GET',
                url: 'http://localhost:8080/products/' + id,
            }
        })
    })
    .catch(err => {
        console.log("catch");
        res.status(500).json({ error: err })
    });
});


router.delete("/:productId", (req, res, next) => {
    const id = req.params.productId;
    Product.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Product deleted',
            request: {
                type: 'POST',
                url: 'http://localhost:8080/products/' + id,
                data: {name: "String", price:"Number"}
            }
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
});


module.exports = router;
