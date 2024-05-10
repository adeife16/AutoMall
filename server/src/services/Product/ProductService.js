const ProductModel = require('../../models/Product/Product.model');

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
        return await this.ProductModel.getModels(subCatId);
    }

    async getYears(modelId){
        return await this.ProductModel.getYears(modelId);
    }

    async getTrims(yearId){
        return await this.ProductModel.getTrims(yearId);
    }

    async getColors(){
        return await this.ProductModel.getColors();
    }

    async getCylinders(trimId){
        return await this.ProductModel.getCylinders(trimId);
    }

    async getDrives(trimId){
        return await this.ProductModel.getDrives(trimId);
    }

    async getFuels(trimId){
        return await this.ProductModel.getFuels(trimId);
    }

    async getHorsePowers(trimId){
        return await this.ProductModel.getHorsePowers(trimId);
    }

    async getSeats(trimId){
        return await this.ProductModel.getSeats(trimId);
    }

    async getSizes(trimId){
        return await this.ProductModel.getSizes(trimId);
    }

    async getTypes(trimId){
        return await this.ProductModel.getTypes(trimId);
    }
}

module.exports = ProductService;