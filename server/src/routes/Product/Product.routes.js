const express = require('express');
const productRoute = express.Router();
const multer = require('multer');
const upload = multer();

const ProductController = require('../../controllers/Product/Product.controller');
const productController = new ProductController();

// handlers
const categoriesHandler = productController.getCategories.bind(productController);
const subCategoriesHandler = productController.getSubCategories.bind(productController);
const makesHandler = productController.getMakes.bind(productController);
const modelsHandler = productController.getModels.bind(productController);

// mount routes
productRoute.get('/product/category', upload.none(), categoriesHandler);
productRoute.get('/product/subcategory/:catId', upload.none(), subCategoriesHandler);
productRoute.get('/product/make', upload.none(), makesHandler);
productRoute.get('/product/model/:subCatId', upload.none(), modelsHandler);

module.exports = productRoute;
