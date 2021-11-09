const IncomeService = require('../service/incomeService');
const CurrencyModel = require('../models/currency');

module.exports.create = async (req,res,next) => {
    console.log(req);
    
    try {

        const currencyId = await CurrencyModel.getByDescription([req.body.currency]);
        const args = [
            req.body.accountId,
            req.body.categoryId,
            currencyId,
            req.body.amount,
            req.body.note,
            req.body.status,
            req.body.isoDateTransaction,
            req.body.transactionTime
        ];

        await IncomeService.create(args);
        console.log('Income created');
        res.status(201).json({valid:true,message:'Income created!'});
    } catch (error) {
        res.status(400).json({valid:false,message:error});
    }
}

