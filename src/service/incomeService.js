const Income = require('../models/income');
const Account = require('../models/account');

const IncomeService = {};


IncomeService.create = async (data) => {
    const [accountId,,,amount] = [...data];

    try {
        await Income.create(data);
        await Account.updateBalance([amount,accountId]);
        
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

module.exports = IncomeService;