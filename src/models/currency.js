const pgdb = require('../util/postgres-database');

const Currency = {};

Currency.getAll = () => {
    console.log("Get All Currency");
    return pgdb.query('SELECT * from currency');
}

Currency.getByDescription = async (data) => {
    console.log("getByDescription Currency");
    let currencyID;
    try {
        
        const rs = await pgdb.query('SELECT * from currency where description = $1',data)
        console.log(rs);
        currencyID = rs.rows[0].currency_id;
    } catch (error) {
        console.log(error);
    }
    return currencyID;
}

module.exports = Currency;