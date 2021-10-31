const Expense = require('../models/expense');
const Account = require('../models/account');

const ExpenseService = {};


ExpenseService.create = async (data) => {
    const [accountId,,,amount] = [...data];

    try {
        console.log("amountToExpense: ",amount);
        await Expense.create(data);
        await Account.updateBalance([(-1*amount),accountId]);
        
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

module.exports = ExpenseService;