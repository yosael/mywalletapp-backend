const ExpenseService = require('../service/expenseService');

module.exports.create = async (req,res,next) => {
    console.log(req);
    const args = [
        req.body.accountId,
        req.body.categoryId,
        req.body.currencyId,
        req.body.amount,
        req.body.note,
        req.body.status
    ];
    
    
    try {

        await ExpenseService.create(args);
        console.log('Expense created');
        res.status(201).json({valid:true,message:'Expense created!'});
    } catch (error) {
        res.status(400).json({valid:false,message:error});
    }
}

