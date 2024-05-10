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

    async getModels(makeId){ 
        const models = await this.db.fetchWhere('am_models', 'make_id', makeId, '*');
        if(models.length > 0){
            return models;
        }
        return null;
    }

    async getYears(modelId){
        const years = await this.db.fetchWhere('am_year', 'model_id', modelId, '*');
        if(years.length > 0){
            return years;
        }
        return null;
    }

    async getTrims(yearId){
        const trims = await this.db.fetchWhere('am_trim', 'year_id', yearId, '*');
        if(trims.length > 0){
            return trims;
        }
        return null;
    }

    async getColors(){
        const colors = await this.db.fetch('am_color');
        if(colors.length > 0){
            return colors;
        }
        return null;
    }

    async getCylinders(trimId){
        const cylinders = await this.db.fetchWhere('am_cylinder', 'trim_id', trimId, '*');
        if(cylinders.length > 0){
            return cylinders;
        }
        return null;
    }

    async getDrives(trimId){    
        const drives = await this.db.fetchWhere('am_drive', 'trim_id', trimId, '*');
        if(drives.length > 0){
            return drives;
        }
        return null;
    }

    async getFuels(trimId){
        const fuels = await this.db.fetchWhere('am_fuel', 'trim_id', trimId, '*');
        if(fuels.length > 0){
            return fuels;
        }
        return null;
    }

    async getHorsePowers(trimId){
        const hps = await this.db.fetchWhere('am_horse_power', 'trim_id', trimId, '*');
        if(hps.length > 0){
            return hps;
        }
        return null;
    }

    async getSeats(trimId){
        const seats = await this.db.fetchWhere('am_seat', 'trim_id', trimId, '*');
        if(seats.length > 0){
            return seats;
        }
        return null;
    }

    async getSizes(trimId){
        const sizes = await this.db.fetchWhere('am_size', 'trim_id', trimId, '*');
        if(sizes.length > 0){
            return sizes;
        }
        return null;
    }

    async getTypes(trimId){
        const types = await this.db.fetchWhere('am_type', 'trim_id', trimId, '*');
        if(types.length > 0){
            return types;
        }
        return null;
    }
}

module.exports = ProductModel;