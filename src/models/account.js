const pgdb = require('../util/postgres-database');

const Account = {};

Account.getAccountByUser = (data) => {
    console.log("getAccountByUser");
    const values = [...data];
    return pgdb.query(
    `select ac.*,type.description as account_type,curr.description as currency from account ac,account_type type,currency curr where 1=1 
    and ac.account_type_id = type.account_id
    and ac.currency_id = curr.currency_id
    and ac.user_id = $1`,values);
}

Account.getAccountById = (data) => {
    console.log("AccountID");
    const values = [...data];
    return pgdb.query(
    `select ac.*,curr.description as currency from account ac, currency curr where 1=1
    and ac.currency_id = curr.currency_id and ac.account_id = $1`,values);
}

Account.create = (data) => {
    const values = [...data];
    const INSERT_QUERY = `INSERT INTO account (account_type_id,currency_id,user_id,account_name,current_balance)
    values ($1,$2,$3,$4,$5)`;
    return pgdb.query(INSERT_QUERY,values);
}

Account.updateBalance = (data) => {
    const values = [...data];
    const UPDATE_QUERY = `UPDATE account set current_balance = current_balance + $1 where account_id = $2`;
    return pgdb.query(UPDATE_QUERY,values);
}

module.exports = Account;