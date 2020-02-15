const express = require('express');
const router = express.Router();

const Product = require('../models/product');
const mongoose = require('mongoose');


router.get('/', (req, res, next) => {
    Product.find()
    .exec()
    .then(docs =>  {
        console.log(docs);
        if(docs.length >= 0) {
            res.status(200).json(docs);
        } else {
            res.status(404).json({
                message: "No entries found"
            })
        }
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

router.get('/:productId',(req, res, next) => {
    const id = req.params.productId;
    console.log("TCL: id", id);
    if(mongoose.Types.ObjectId.isValid(id)) {
        Product.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            if(doc) {
                console.log("OK");
                res.status(200).json(doc);
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
        console.log("ops",ops);
        updateOps[ops.propName] = ops.value;
        console.log("updateOps",updateOps);
    }
    console.log("TCL: updateOps", updateOps)
    Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({result})
    })
    .catch(err => {
        res.status(500).json({ error: err })
    });
});


router.delete("/:productId", (req, res, next) => {
    const id = req.params.productId;
    console.log("id",id);
    Product.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
});


module.exports = router;
