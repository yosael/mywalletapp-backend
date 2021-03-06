const pgdb = require('../util/postgres-database');

const Expense = {};


Expense.create = (data) => {
    const values = [...data];
    const INSERT_QUERY = `INSERT INTO expense (account_id,category_id,currency_id,amount,note,status,created_date,created_time)
    values ($1,$2,$3,$4,$5,$6,$7,$8)`;
    return pgdb.query(INSERT_QUERY,values);
}


Expense.getExpensesReport = (data) => {
    const values = [...data];
    return pgdb.query(`
        select cat.category_name,sum(expe.amount) as total from expense expe, account ac, category cat,currency curr where 1=1 
        and expe.account_id = ac.account_id 
        and expe.category_id = cat.category_id
        and ac.currency_id = curr.currency_id
        and ac.user_id =$1 
        group by cat.category_name
    `,values);
}


Expense.getExpensesReportLastGroupByDate = (data) => {
    const values = [...data];
    return pgdb.query(`
        select expe.created_date,sum(expe.amount) as total from expense expe, account ac, currency curr where 1=1 
        and expe.account_id = ac.account_id 
        and ac.currency_id = curr.currency_id
        and ac.user_id =$1 
        and expe.created_date >  CURRENT_DATE - INTERVAL '1 months'
        group by expe.created_date
    `,values);
}




module.exports = Expense;