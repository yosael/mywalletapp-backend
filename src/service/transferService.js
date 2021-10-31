const Transfer = require('../models/transfer');
const Account = require('../models/account');

const TransferService = {};


TransferService.create = async (data) => {
    const values = [...data];
    const [accountIdFrom,accountIdTo,,amount] = data;

    try {

        await Transfer.create(values);
        await Account.updateBalance([(-1*amount),accountIdFrom]);
        await Account.updateBalance([amount,accountIdTo]);

        
    } catch (error) {
        console.log(error);

        throw Error(error);
    }
    
}

module.exports = TransferService;