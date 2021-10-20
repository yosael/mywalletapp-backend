const Currency = require('../models/currency');



module.exports.getAll = async (req,res,next) =>{

    try {
        const result = await Currency.getAll();
        console.log("result fetch",result);
        res.status(200).json({valid:true,message:'Currency loaded',currencies:result.rows});
    } catch (error) {
        res.status(400).json({valid:false,message:error});
    }
}