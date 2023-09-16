const userData = require('./seeds_data/user');
const productData = require('./seeds_data/product');
const transactionData = require('./seeds_data/transaction');


exports.seed = function (knex) {
    return knex('user').del().then(()=>{
        return knex('user').insert(userData);
    }).then(()=>{
        return knex('product').del();
    }).then(()=>{
        return knex('product').insert(productData);
    }).then(()=>{
        return knex('transaction').del();
    })
    .then(()=>{
        return knex('transaction').insert(transactionData);
    })
}

