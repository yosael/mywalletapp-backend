const pgdb = require('../util/postgres-database');

const Income = {};


Income.create = (data) => {
    const values = [...data];
    const INSERT_QUERY = `INSERT INTO income (account_id,category_id,currency_id,amount,note,status,created_date,created_time)
    values ($1,$2,$3,$4,$5,$6,$7,$8)`;
    return pgdb.query(INSERT_QUERY,values);
}

module.exports = Income;