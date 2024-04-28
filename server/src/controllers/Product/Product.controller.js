const ProductService = require('../../services/ProductService');

class ProductController{
    constructor(){
        this.ProductService = new ProductService();
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

}

module.exports = ProductController