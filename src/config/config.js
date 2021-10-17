const dotev = require('dotenv');
dotev.config();

module.exports = {
    postgres: {
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DATABASE,
        port: process.env.POSTGRES_PORT
    },
    server: {
        port: 3800
    }
}