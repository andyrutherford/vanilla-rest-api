const http = require('http');
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./controllers/productController');

const server = http.createServer((req, res) => {
  if (req.url === '/api/products' && req.method === 'GET') {
    getProducts(req, res);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'GET') {
    getProductById(req, res);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'PUT') {
    updateProduct(req, res);
  } else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'DELETE') {
    deleteProduct(req, res);
  } else if (req.url === '/api/products' && req.method === 'POST') {
    createProduct(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not found.' }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, (req, res) =>
  console.log(`Server running on port ${PORT}`)
);
