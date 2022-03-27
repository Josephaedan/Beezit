var express = require("express");
var router = express.Router();
const pool = require("../db");

// Access the URL corresponding to a beez
router.get("/:url_id", async (req, res) => {
  try {
    const { url_id } = req.params;
    const link = await pool.query("SELECT link FROM beez WHERE url_id = $1", [
      url_id,
    ]);

    res.redirect(link.rows[0].link);
  } catch (err) {
    res.status(404).json({ message: err.message });
    console.error(err.message);
  }
});

module.exports = router;
