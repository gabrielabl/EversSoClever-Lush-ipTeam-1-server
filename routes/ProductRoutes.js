const knex = require('knex')(require('../knexfile'));
const express = require('express');
const router = express.Router();
const {v4:uuid} = require('uuid');
require('dotenv').config();

// GET all products

router.get('/', (req, res)=>{
    knex('product').then(products=>{
        res.status(200).json(products)
    }).catch(err=>{
        res.status(400).send(`Invalid request ${err}`)
    })
})


// Get product by product ID

router.get('/:productID', (req, res)=>{
    const {productID} = req.params;
    knex('product').where({id:productID}).then(product=>{
        res.status(200).json(product)
    }).catch(err=>{
        res.status(400).send(`Invalid product ID ${err}`)
    })
})

// Get product by product category

router.get('/category/:productCategory', (req, res)=>{
    const {productCategory} = req.params;
    knex('product').where({category:productCategory}).then(product=>{
        res.status(200).json(product)
    }).catch(err=>{
        res.status(400).send(`Invalid product Category ${err}`)
    })
})


// Get product by user recent purchase

router.get('/user/:userID', (req, res)=>{
    const {userID} = req.params;
    knex.select(
        'product.id as id',
        'product_name',
        'product_price',
        'quantity',
        'category',
        'product_image',
        'transaction.user_id as user_id',
        'transaction.created_at as purchase_date'
        ).from('product').join('transaction','product.id','transaction.product_id')
        .where({user_id:userID}).orderBy('purchase_date','asc').then(userProducts=>{
            res.status(200).json(userProducts)
        }).catch(err=>{
            res.status(400).send(`Invalid user ID ${err}`)
        })
    
})


module.exports = router;