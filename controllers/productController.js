const Product = require('../models/productModel');

async function getProducts(req, res) {
  try {
    const products = await Product.findAll();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.error(error);
  }
}

async function getProductById(req, res) {
  try {
    let id = req.url;
    id = id.split('/api/products/')[1];
    const product = await Product.findOne(id);
    if (!product) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product not found.' }));
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(product));
  } catch (error) {
    console.error(error);
  }
}

async function createProduct(req, res) {
  try {
    const product = {
      title: 'Test',
      description: 'the description',
      price: 100,
    };
    const newProduct = await Product.create(product);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getProducts, getProductById, createProduct };
