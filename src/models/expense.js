const pgdb = require('../util/postgres-database');

const Expense = {};


Expense.create = (data) => {
    const values = [...data];
    const INSERT_QUERY = `INSERT INTO expense (account_id,category_id,currency_id,amount,note,status)
    values ($1,$2,$3,$4,$5,$6)`;
    return pgdb.query(INSERT_QUERY,values);
}


Expense.getExpensesReport = (data) => {
    const values = [...data];
    return pgdb.query(`
        select cat.category_name,sum(expe.amount) as total,curr.description as currency from expense expe, account ac, category cat,currency curr where 1=1 
        and expe.account_id = ac.account_id 
        and expe.category_id = cat.category_id
        and ac.currency_id = curr.currency_id
        and ac.user_id =$1 
        group by cat.category_name,curr.description
    `,values);
}




module.exports = Expense;