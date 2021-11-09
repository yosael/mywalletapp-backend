const pgdb = require('../util/postgres-database');

const Transaction = {};

Transaction.getAllByUser = (data) => {

    console.log("modelGetByUser:",data);
    const userId = [...data];
    const QUERY = `
    with transactions as (
        select inc.income_id as transaction_id,inc.account_id,cat.category_name,inc.amount,inc.created_date,'income' as type,curr.description as currency,inc.created_time from income inc, account ac,category cat,currency curr where 1=1
        and inc.account_id = ac.account_id 
        and inc.category_id = cat.category_id
        and ac.currency_id = curr.currency_id
        and ac.user_id =$1
        union all
        select expe.expense_id as transaction_id,expe.account_id,cat.category_name,expe.amount,expe.created_date,'expense' as type,curr.description as currency,expe.created_time from expense expe, account ac, category cat,currency curr where 1=1 
        and expe.account_id = ac.account_id 
        and expe.category_id = cat.category_id
        and ac.currency_id = curr.currency_id
        and ac.user_id =$1
        union all
        select transf.transfer_id as transaction_id,transf.account_id_from,'Transfer' as category_name,transf.amount,transf.created_date,'transfer' as type,curr.description as currency,transf.created_time from transfer transf, account ac, currency curr where 1=1 
        and transf.account_id_from = ac.account_id 
        and ac.currency_id = curr.currency_id
        and ac.user_id =$1
        )
        select t.transaction_id,t.account_id,t.category_name,t.amount,t.created_date,t.type,t.currency,to_char(t.created_time, 'HH24:MI') as created_time from transactions t order by created_date desc,created_time desc;
    `;
    try {
        return pgdb.query(QUERY,userId);    
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
    
}

Transaction.getLast5ByUser = (data) => {

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
        select * from transactions order by created_date desc LIMIT 5
    `;
    return pgdb.query(QUERY,userId);
}


Transaction.getIncomeVsExpenseReport = (data) => {

    console.log("modelGetByUser:",data);
    const userId = [...data];
    const QUERY = `
    select sum(inc.amount) as total, 'income' as type from income inc, account ac, currency curr where 1=1 
    and inc.account_id = ac.account_id 
    and ac.currency_id = curr.currency_id
    and ac.user_id =$1 
    and inc.created_date >  CURRENT_DATE - INTERVAL '1 months'
    union all
    select sum(expe.amount) as total, 'expense' as type from expense expe, account ac, currency curr where 1=1 
    and expe.account_id = ac.account_id 
    and ac.currency_id = curr.currency_id
    and ac.user_id =$1
    and expe.created_date >  CURRENT_DATE - INTERVAL '1 months'
    `;
    return pgdb.query(QUERY,userId);
}

module.exports = Transaction;