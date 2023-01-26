// import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const Note = require("./models/note");
const notesController = require("./controllers/notesControllers");
// create an express app
const app = express();

// configure express app
app.use(express.json());

// connect to databse
connectToDb();

/// Routing
app.get("/notes", notesController.fetchNotes);
app.get("/notes/:id", notesController.fetchNote);
app.post("/notes", notesController.createNote);
app.put("/notes/:id", notesController.updateNote);
app.delete("/notes/:id", notesController.deleteNote);
// start out server
app.listen(process.env.PORT);
