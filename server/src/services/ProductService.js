const ProductModel = require('../models/Product/Product.model');

class ProductService {
    constructor() {
        this.ProductModel = new ProductModel();
    }

    async getCategories(){
        return await this.ProductModel.getCategories();
    }

    async getSubCategories(catId){
        return await this.ProductModel.getSubCategories(catId);
    }

    async getMakes(){
        return await this.ProductModel.getMakes();
    }

    async getModels(subCatId){
        return await this.ProductModel.getModel(subCatId);
    }
}

module.exports = ProductService;