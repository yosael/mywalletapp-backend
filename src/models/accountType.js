const pgdb = require('../util/postgres-database');

const AccountType = {};

AccountType.getAll = () => {
    console.log("gettAll AccountType");
    return pgdb.query('SELECT * from account_type');
}

module.exports = AccountType;