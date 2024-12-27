// db.js
require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: String(process.env.POSTGRES_PASSWORD), // Şifreyi açıkça string'e çeviriyoruz
  port: parseInt(process.env.POSTGRES_PORT, 10), // Port numarasını sayıya çeviriyoruz
});

module.exports = pool;
