const ExpenseService = require('../service/expenseService');
const ExpenseModel = require('../models/expense');

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

module.exports.getExpensesReport = async (req,res,next) =>{

    try {
        console.log("params received2: ",req.params.userId);
        const result = await ExpenseModel.getExpensesReport([req.params.userId]);
        console.log("result fetch",result);
        const categories =  result.rows.map((item)=> item.category_name);
        const totals =  result.rows.map((item)=> item.total);

        res.status(200).json({valid:true,message:'users loaded',expenses:{categories,totals}});
    } catch (error) {
        res.status(400).json({valid:false,message:error});
    }
}

