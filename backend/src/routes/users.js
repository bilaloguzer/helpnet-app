const express = require("express");
const router = express.Router();
const pool = require("../db/index");
const Joi = require("joi");

// Kullanıcı Doğrulama Şeması
const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
});

// Ortak hata işleme fonksiyonu
const handleErrors = (res, err, message = "Server error") => {
  console.error(err.message || err);
  res.status(500).send(message);
};

// Kullanıcıları Listele
router.get("/", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    handleErrors(res, err);
  }
});

// Tek Bir Kullanıcı Getir
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (user.rows.length === 0) {
      return res.status(404).send("User not found");
    }
    res.json(user.rows[0]);
  } catch (err) {
    handleErrors(res, err);
  }    
});

// Yeni Kullanıcı Ekle
router.post("/", async (req, res) => {
  console.log("Request Body:", req.body);

  try {
    const { error } = userSchema.validate(req.body);
    if (error) {
      console.error("Validation error:", error.details[0].message);
      return res.status(400).send(error.details[0].message);
    }

    const { name, email } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    handleErrors(res, err);
  }
});

// Kullanıcı Güncelle
router.put("/:id", async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { id } = req.params;
    const { name, email } = req.body;
    const updatedUser = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]
    );
    if (updatedUser.rows.length === 0) {
      return res.status(404).send("User not found");
    }
    res.json(updatedUser.rows[0]);
  } catch (err) {
    handleErrors(res, err);
  }
});

// Kullanıcı Sil
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    if (deletedUser.rows.length === 0) {
      return res.status(404).send("User not found");
    }
    res.send("User deleted");
  } catch (err) {
    handleErrors(res, err);
  }
});

module.exports = router;
