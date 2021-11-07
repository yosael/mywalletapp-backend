const pgdb = require('../util/postgres-database');

const Transaction = {};

Transaction.getAllByUser = (data) => {

    console.log("modelGetByUser:",data);
    const userId = [...data];
    const QUERY = `
    with transactions as (
        select inc.income_id as transaction_id,inc.account_id,cat.category_name,inc.amount,inc.created_date,'income' as type,curr.description as currency from income inc, account ac,category cat,currency curr where 1=1
        and inc.account_id = ac.account_id 
        and inc.category_id = cat.category_id
        and ac.currency_id = curr.currency_id
        and ac.user_id =$1
        union all
        select expe.expense_id as transaction_id,expe.account_id,cat.category_name,expe.amount,expe.created_date,'expense' as type,curr.description as currency from expense expe, account ac, category cat,currency curr where 1=1 
        and expe.account_id = ac.account_id 
        and expe.category_id = cat.category_id
        and ac.currency_id = curr.currency_id
        and ac.user_id =$1
        union all
        select transf.transfer_id as transaction_id,transf.account_id_from,'Transfer' as category_name,transf.amount,transf.created_date,'transfer' as type,curr.description as currency from transfer transf, account ac, currency curr where 1=1 
        and transf.account_id_from = ac.account_id 
        and ac.currency_id = curr.currency_id
        and ac.user_id =$1
        )
        select * from transactions order by created_date desc
    `;
    return pgdb.query(QUERY,userId);
}

module.exports = Transaction;