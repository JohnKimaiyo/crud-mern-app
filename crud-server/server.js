// import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const Note = require("./models/note");

// create an express app
const app = express();

// configure express app
app.use(express.json());

// connect to databse
connectToDb();

// routing
app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.get("/notes", async (req, res) => {
  // find the notes
  const notes = await Note.find();
  // respond with them
  res.json({ notes: notes });
});

app.get("/notes/:id", async (req, res) => {
  //get id off the url
  const noteId = req.params.id;
  //find the note using that ud
  const note = await Note.findById();
  // respond with note
  res.json({ note: note });
});

app.post("/notes", async (req, res) => {
  // get the sent in data off request body
  const title = req.body.title;
  const body = req.body.body;
  // create a note with it
  const note = await Note.create({
    title: title,
    body: body,
  });
  // respond wit the new note
  res.json({ notes: note });
});

app.put("/notes/id", async (req, res) => {
  // get the id off the url
  const noteId = req.params.id;
  //get the data of fthe req body
  const title = req.body.title;
  const body = req.body.body;

  // find and update the record
  await Note.findByIdAndUpdate(noteId, {
    title: title,
    body: body,
  });
  // find updated note
  const note = await Note.findById(noteId);
  // respond with it
  res.json({ note: note });
});

// delete api
app.delete("/notes/id", async (res, req) => {
  // get id offf url
  const noteid = req.params.id;
  // delete the record
  await Note.deleteOne({ id: noteid });
  // respond
  res.json({success:"Record deleted"})
});
// start out server
app.listen(process.env.PORT);
