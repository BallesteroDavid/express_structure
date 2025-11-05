const { Router } = require('express');
const productsController = require('../controllers/products.controller');

const router = Router();

// Définir les endpoints
router.get('/test', productsController.test);
router.get('/', productsController.listProducts);
router.get('/:id', productsController.getProductsId);
router.post('/', productsController.createProduct);

module.exports = router;