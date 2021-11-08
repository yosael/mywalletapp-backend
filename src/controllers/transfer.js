const TransferService = require('../service/transferService');

module.exports.create = async (req,res,next) => {
    console.log(req);
    const args = [
        req.body.accountIdFrom,
        req.body.accountIdTo,
        req.body.currencyId,
        req.body.amount,
        req.body.note,
        req.body.status,
        req.body.isoDateTransaction
    ];
    
    
    try {

        await TransferService.create(args);
        console.log('Transfer created');
        res.status(201).json({valid:true,message:'Transfer created!'});
    } catch (error) {
        res.status(400).json({valid:false,message:error});
    }
}



