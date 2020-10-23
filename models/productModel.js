const products = require('../data/products');
const crypto = require('crypto');

const { writeToFile } = require('../utils');

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

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = {
      ...product,
      id: crypto.randomBytes(16).toString('hex'),
    };
    products.push(newProduct);
    writeToFile('./data/products.json', products);
    resolve(newProduct);
  });
}

function update(product, id) {
  return new Promise((resolve, reject) => {
    const idx = products.findIndex((p) => p.id === id);
    products[idx] = { ...product, id };
    writeToFile('./data/products.json', products);
    resolve(products[idx]);
  });
}

module.exports = { findAll, findOne, create, update };
