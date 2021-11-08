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

module.exports.getLast5ByUser = async (req,res,next) =>{

    try {
        console.log("params received: ",req.params.userId);
        const result = await Transaction.getLast5ByUser([req.params.userId]);
        console.log("result fetch",result);
        res.status(200).json({valid:true,message:'transactions loaded',transactions:result.rows});
    } catch (error) {
        res.status(400).json({valid:false,message:error});
    }
}

module.exports.getIncomeVsExpenseReport = async (req,res,next) =>{

    try {
        console.log("params received2: ",req.params.userId);
        const result = await Transaction.getIncomeVsExpenseReport([req.params.userId]);
        console.log("result fetch",result);
        const types =  result.rows.map((item)=> item.type);
        const totals =  result.rows.map((item)=> parseFloat(item.total));
        

        res.status(200).json({valid:true,message:'transactions loaded',transactions:{types,totals}});
    } catch (error) {
        res.status(400).json({valid:false,message:error});
    }
}

