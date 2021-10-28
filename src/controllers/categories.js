const Category = require('../models/category');

module.exports.getAll = async (req,res,next) =>{

    try {
        const result = await Category.getAll();
        console.log("result fetch",result);
        res.status(200).json({valid:true,message:'Category loaded',categories:result.rows});
    } catch (error) {
        res.status(400).json({valid:false,message:error});
    }
}