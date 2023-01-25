//load env vriable
require("dotenv").config();
// import dependencies
const express = require("express");

// create an express app
const app = express();

// routing
app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

// start out server
app.listen(process.env.PORT);
