const Account = require('../models/account');

module.exports.create = async (req,res,next) => {
    console.log(req);
    const args = [
        req.body.accountTypeId,
        req.body.currencyId,
        req.body.userId,
        req.body.accountName,
        req.body.currentBalance
    ];
    
    try {

        await Account.create(args);
        console.log('account created');
        res.status(201).json({valid:true,message:'Account created!'});
    } catch (error) {
        res.status(400).json({valid:false,message:error});
    }
}


module.exports.getAllByUser = async (req,res,next) =>{

    try {
        console.log("params received: ",req.params);
        console.log("params received2: ",req.params.userId);
        const result = await Account.getAccountByUser([req.params.userId]);
        console.log("result fetch",result);
        res.status(200).json({valid:true,message:'users loaded',accounts:result.rows});
    } catch (error) {
        res.status(400).json({valid:false,message:error});
    }
}