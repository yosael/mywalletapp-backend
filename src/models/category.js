const pgdb = require('../util/postgres-database');

const Category = {};

Category.getAll = () => {
    console.log("Get All Category");
    return pgdb.query('SELECT * from category');
}

module.exports = Category;