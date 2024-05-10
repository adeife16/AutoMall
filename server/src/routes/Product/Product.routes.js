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
const yearHandler = productController.getYears.bind(productController);
const trimHandler = productController.getTrims.bind(productController);
const colorHandler = productController.getColors.bind(productController);
const cylinderHandler = productController.getCylinders.bind(productController);
const driveeHandler = productController.getDrives.bind(productController);
const fuelHandler = productController.getFuels.bind(productController);
const horsePowerHandler = productController.getHorsePowers.bind(productController);
const seatHandler = productController.getSeats.bind(productController);
const sizeHandler = productController.getSizes.bind(productController);
const typeHandler = productController.getTypes.bind(productController);




// mount routes
productRoute.get('/product/category', upload.none(), categoriesHandler);
productRoute.get('/product/subcategory/:catId', upload.none(), subCategoriesHandler);
productRoute.get('/product/make', upload.none(), makesHandler);
productRoute.get('/product/model/:subCatId', upload.none(), modelsHandler);
productRoute.get('/product/year/:modelId', upload.none(), yearHandler);
productRoute.get('/product/trim/:yearId', upload.none(), trimHandler);
productRoute.get('/product/color', upload.none(), colorHandler);
productRoute.get('/product/cylinder/:trimId', upload.none(), cylinderHandler);
productRoute.get('/product/drive/:trimId', upload.none(), driveeHandler);
productRoute.get('/product/fuel/:trimId', upload.none(), fuelHandler);
productRoute.get('/product/horsepower/:trimId', upload.none(), horsePowerHandler);
productRoute.get('/product/seat/:trimId', upload.none(), seatHandler);
productRoute.get('/product/size/:trimId', upload.none(), sizeHandler);
productRoute.get('/product/type/:trimId', upload.none(), typeHandler);


module.exports = productRoute;
