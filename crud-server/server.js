// import dependencies
const express = require("express");
const cors = require ("cors");
const connectToDb = require("./config/connectToDb");
const Note = require("./models/note");
const notesController = require("./controllers/notesControllers");
const usersController = require("./controllers/userControllers")''

// create an express app
const app = express();

// configure express app
app.use(express.json());
app.use(cors());
// connect to databse
connectToDb();

/// Routing
app.post("/signup", usersController.signup);
app.post("/login",usersController.login);
app.get("/logout",usersController.logout);

app.get("/notes", notesController.fetchNotes);
app.get("/notes/:id", notesController.fetchNote);
app.post("/notes", notesController.createNote);
app.put("/notes/:id", notesController.updateNote);
app.delete("/notes/:id", notesController.deleteNote);

// start out server
app.listen(process.env.PORT);
