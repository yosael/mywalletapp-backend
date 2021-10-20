const pgdb = require('../util/postgres-database');

const Currency = {};

Currency.getAll = () => {
    console.log("Get All Currency");
    return pgdb.query('SELECT * from currency');
}

module.exports = Currency;