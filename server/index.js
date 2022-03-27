const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES
var beez = require("./routes/beez");
var id = require("./routes/id");

// API CALLS
app.use("/beez", beez);
app.use("/", id);

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
