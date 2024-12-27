<<<<<<< HEAD
// db.js
require("dotenv").config();
const { Pool } = require("pg");
=======
const { Pool } = require('pg');
>>>>>>> 4439fea6db0764321fcb6642fc8b91ad5cc2f5c0

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
<<<<<<< HEAD
  password: String(process.env.POSTGRES_PASSWORD), // Şifreyi açıkça string'e çeviriyoruz
  port: parseInt(process.env.POSTGRES_PORT, 10), // Port numarasını sayıya çeviriyoruz
=======
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
>>>>>>> 4439fea6db0764321fcb6642fc8b91ad5cc2f5c0
});

module.exports = pool;
