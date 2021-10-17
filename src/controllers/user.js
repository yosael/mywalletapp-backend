const User = require('../models/user');


module.exports.create = async (req,res,next) => {
    console.log(req);
    const args = [req.body.uid,req.body.email];
    
    try {

        await User.create(args);
        console.log('user created');
        res.status(201).json({valid:true,message:'User created!'});
    } catch (error) {
        res.status(400).json({valid:false,message:error});
    }
}


module.exports.getAll = async (req,res,next) =>{

    try {
        const result = await User.getAll();
        console.log("result fetch",result);
        res.status(400).json({valid:true,message:'users loaded',users:result.rows});
    } catch (error) {
        res.status(400).json({valid:false,message:error});
    }
}