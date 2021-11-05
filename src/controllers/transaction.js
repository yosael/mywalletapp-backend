const Transaction = require('../models/transaction');

module.exports.getAllByUser = async (req,res,next) =>{

    try {
        console.log("params received: ",req.params.userId);
        const result = await Transaction.getAllByUser([req.params.userId]);
        console.log("result fetch",result);
        res.status(200).json({valid:true,message:'transactions loaded',transactions:result.rows});
    } catch (error) {
        res.status(400).json({valid:false,message:error});
    }
}

