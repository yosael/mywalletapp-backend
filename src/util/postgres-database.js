const { Pool } = require('pg');
const { postgres } = require('../config/config');
console.log("pstgres",postgres);
const pool = new Pool({
    user: postgres.user,
    host: postgres.host,
    database: postgres.database,
    password: postgres.password,
    port: postgres.port
});

console.log(pool);
module.exports = pool;