const TransferService = require('../service/transferService');
const CurrencyModel = require('../models/currency');

module.exports.create = async (req,res,next) => {
    console.log(req);
    try {

        const currencyId = await CurrencyModel.getByDescription([req.body.currency]);

        const args = [
            req.body.accountIdFrom,
            req.body.accountIdTo,
            currencyId,
            req.body.amount,
            req.body.note,
            req.body.status,
            req.body.isoDateTransaction,
            req.body.transactionTime
        ];

        await TransferService.create(args);
        console.log('Transfer created');
        res.status(201).json({valid:true,message:'Transfer created!'});
    } catch (error) {
        res.status(400).json({valid:false,message:error});
    }
}



