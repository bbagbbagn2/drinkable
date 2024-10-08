const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const options = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};

const pool = mysql.createPool(options);

module.exports = pool;