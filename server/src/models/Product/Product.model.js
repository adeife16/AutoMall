const Database = require('../../database/database');

class ProductModel{
    constructor(){
        this.db = new Database();
    }
    
    async getCategories(){
        const categories = await this.db.fetchWhere('am_category', 'status', 'active', "*");
        if(categories.length > 0){
            return categories;
        }
        return null;
    }

    async getSubCategories(catId){
        const catStatus = await this.db.fetchWhere('am_category', 'category_id', catId, "*");

        if(catStatus[0].status != 'active'){
            return null;
        }

        const subCategories = await this.db.fetchWhere('am_sub_category', 'category_id', catId, '*');
        if(subCategories.length > 0){
            return subCategories;
        }
        return null;
    }

    async getMakes(){
        const makes = await this.db.fetch('am_makes');
        if(makes.length > 0){
            return makes;
        }
        return null;
    }

    async getModel(makeId){ 
        const models = await this.db.fetchWhere('am_models', 'make_id', makeId, '*');
        if(models.length > 0){
            return models;
        }
        return null;
    }

}

module.exports = ProductModel;