const AccountType = require('../models/accountType');

module.exports.getAll = async (req,res,next) =>{

    try {
        const result = await AccountType.getAll();
        res.status(200).json({valid:true,message:'AccountType List',accountTypes: result.rows});
    } catch (error) {
        res.status(400).json({valid:false,message:error});
    }
}