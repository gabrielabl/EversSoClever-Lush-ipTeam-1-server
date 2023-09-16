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

module.exports = router;