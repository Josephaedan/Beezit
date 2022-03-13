const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//Create a Beez
app.post("/beez", async (req, res) => {
  try {
    var data = req.body;
    var url_id = data.url_id;
    var link = data.link;

    const newBeez = await pool.query(
      "INSERT INTO beez(url_id, link) VALUES($1, $2) RETURNING *",
      [url_id, link]
    );

    res.json(newBeez.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a Beez
app.get("/beez/:id", async (req, res) => {
  try {
    const { Beez } = await pool.query("SELECT * FROM beez WHERE url_id = $1", [
      id,
    ]);
    res.json(Beez.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Access the URL corresponding to a beez
app.get("/:url_id", async (req, res) => {
  try {
    const { url_id } = req.params;
    console.log("url_id: " + url_id);
    const link = await pool.query("SELECT link FROM beez WHERE url_id = $1", [
      url_id,
    ]);

    res.redirect(link.rows[0].link);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
