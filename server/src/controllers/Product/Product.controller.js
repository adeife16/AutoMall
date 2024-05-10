const ProductService = require('../../services/Product/ProductService');

class ProductController{
    constructor(){
        this.ProductService = new ProductService();
    }

    async createProduct(req,res){
        const product = req.body;
    }

    async getCategories(req, res){
        const categories = await this.ProductService.getCategories();
        if(categories){
            return res.status(200).json({ categories: categories });
        }
        return res.status(500).json({ message: 'Failed to get categories' });
    }

    async getSubCategories(req, res){
        const subCategories = await this.ProductService.getSubCategories(req.params.catId);
        if(subCategories){
            return res.status(200).json({ subCategories: subCategories });
        }
        return res.status(500).json({ message: 'Failed to get sub categories' });
    }

    async getMakes(req,res){
        const makes = await this.ProductService.getMakes();
        if(makes){
            return res.status(200).json({ makes: makes });
        }
        return res.status(500).json({ message: 'Failed to get makes' });
    }

    async getModels(req,res){
        const models = await this.ProductService.getModels(req.params.subCatId);
        if(models){
            return res.status(200).json({ models: models });
        }
        return res.status(500).json({ message: 'Failed to get models' });
    }

    async getYears(req,res){
        const years = await this.ProductService.getYears(req.params.modelId);
        if(years){
            return res.status(200).json({ years: years });
        }
        return res.status(500).json({ message: 'Failed to get years' });
    }

    async getTrims(req,res){
        const trims = await this.ProductService.getTrims(req.params.yearId);
        if(trims){
            return res.status(200).json({ trims: trims });
        }
        return res.status(500).json({ message: 'Failed to get trims' });
    }

    async getColors(req,res){
        const colors = await this.ProductService.getColors();
        if(colors){
            return res.status(200).json({ colors: colors });
        }
        return res.status(500).json({ message: 'Failed to get colors' });
    }

    async getCylinders(req,res){
        const cylinders = await this.ProductService.getCylinders(req.params.trimId);
        if(cylinders){
            return res.status(200).json({ cylinders: cylinders });
        }
        return res.status(500).json({ message: 'Failed to get cylinders' });
    }

    async getDrives(req,res){
        const drives = await this.ProductService.getDrives(req.params.trimId);
        if(drives){
            return res.status(200).json({ drives: drives });
        }
        return res.status(500).json({ message: 'Failed to get drives' });
    }

    async getFuels(req,res){
        const fuels = await this.ProductService.getFuels(req.params.trimId);
        if(fuels){
            return res.status(200).json({ fuels: fuels });
        }
        return res.status(500).json({ message: 'Failed to get fuels' });
    }

    async getHorsePowers(req,res){
        const hps = await this.ProductService.getHorsePowers(req.params.trimId);
        if(hps){
            return res.status(200).json({ hps: hps });
        }
        return res.status(500).json({ message: 'Failed to get horse powers' });
    }

    async getSeats(req,res){
        const seats = await this.ProductService.getSeats(req.params.trimId);
        if(seats){
            return res.status(200).json({ seats: seats });
        }
        return res.status(500).json({ message: 'Failed to get seats' });
    }

    async getSizes(req,res){
        const sizes = await this.ProductService.getSizes(req.params.trimId);
        if(sizes){
            return res.status(200).json({ sizes: sizes });
        }
        return res.status(500).json({ message: 'Failed to get sizes' });
    }

    async getTypes(req,res){
        const types = await this.ProductService.getTypes(req.params.trimId);
        if(types){
            return res.status(200).json({ types: types });
        }
        return res.status(500).json({ message: 'Failed to get types' });
    }
}

module.exports = ProductController