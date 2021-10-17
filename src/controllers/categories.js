const Category = require('../models/category');

module.exports.createCategory = (req,res,next) => {

    const objCategory = new Category(req.body.description);
    objCategory.save();
    res.status(200).json({valid:true,message:'Ok'});
}

module.exports.getCategory = (req,res,next) => {

    const category = Category.findById(req.params.id);
    res.status(200).json({valid:true,message:'Ok',category:category});
}

module.exports.getCategories = (req,res,next) => {

    const categories = Category.fetchAll();
    res.status(200).json({valid:true,message:'Ok',categories:categories});
}