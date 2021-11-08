const Transfer = require('../models/transfer');
const Account = require('../models/account');
const fetch = require('node-fetch');




const TransferService = {};


TransferService.create = async (data) => {
    const values = [...data];
    const [accountIdFrom,accountIdTo,,amount] = data;

    try {

        await Transfer.create(values);
        await Account.updateBalance([(-1*amount),accountIdFrom]);
        let amountAccountTo = 0;
        //convert here
        if(accountIdFrom!=accountIdTo){
            const accountFromObj = await Account.getAccountById([accountIdFrom]);
            const accountToObj = await Account.getAccountById([accountIdTo]);
            console.log("accountFromObj: ",accountFromObj);
            console.log("accountToObj: ",accountToObj);
            if(accountFromObj.rows[0].currency_id!=accountToObj.rows[0].currency_id){
                console.log("different currency");
                console.log("currencutoTake: ",accountFromObj.rows[0].currency)

                fetch('https://api.coinbase.com/v2/exchange-rates?currency='+accountFromObj.rows[0].currency+'')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const newAmount = parseFloat(data.data.rates[accountToObj.rows[0].currency])*parseFloat(amount);
                    console.log("newAmount: ",newAmount);
                    Account.updateBalance([parseFloat(newAmount).toFixed(2),accountIdTo]);    
                });
            }
            else{
                await Account.updateBalance([amount,accountIdTo]);
            }
        }
        else{
            await Account.updateBalance([amount,accountIdTo]);
        }
        

        
    } catch (error) {
        console.log(error);

        throw Error(error);
    }
    
}

module.exports = TransferService;