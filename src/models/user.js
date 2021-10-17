const pgdb = require('../util/postgres-database');

const User = {};

User.create = (data) => {
    const values = [...data];
    const SQL_CREATE_USER = `INSERT INTO user_app(user_id,email) VALUES ($1,$2)`;
    return pgdb.query(SQL_CREATE_USER,values);
}

User.getAll = () => {
    console.log("gettAll");
    return pgdb.query('SELECT * from user_app');
}

module.exports = User;