var express = require("express");
var router = express.Router();
const pool = require("../db");

//Create a Beez
router.post("/", async (req, res) => {
  try {
    const newBeez = await pool.query(
      "INSERT INTO beez(url_id, link) VALUES($1, $2) RETURNING *",
      [req.body.url_id, req.body.link]
    );

    res.status(201).json(newBeez.rows[0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.error(err.message);
  }
});

// Get all Beez
router.get("/", async (req, res) => {
  try {
    const Beez = await pool.query("SELECT * FROM beez");
    res.status(200).json(Beez.rows);
  } catch (err) {
    res.status(400).json({ link: "false" });
    console.error(err.message);
  }
});

// Get a Beez
router.get("/:id", async (req, res) => {
  try {
    const Beez = await pool.query("SELECT * FROM beez WHERE url_id = $1", [
      req.params.url_id
    ]);
    res.status(200).json(Beez.rows);
  } catch (err) {
    res.status(404).json({ message: err.message });
    console.error(err.message);
  }
});

module.exports = router;
