require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/users");

const app = express();

// JSON middleware
app.use(express.json());

// Kullanıcı route'larını bağlama
app.use("/users", userRoutes);

module.exports = app;
