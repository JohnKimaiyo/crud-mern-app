
// import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb")

// create an express app
const app = express();


// connect to databse
connectToDb()
// routing
app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

// start out server
app.listen(process.env.PORT);
