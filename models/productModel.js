const products = require('../data/products');

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findOne(id) {
  return new Promise((resolve, reject) => {
    resolve(products.find((product) => product.id === id));
  });
}

module.exports = { findAll, findOne };
