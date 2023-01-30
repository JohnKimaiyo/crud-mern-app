// Load env variables
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }
  
  // Import dependencies
  const express = require("express");
  const cors = require("cors");
  const cookieParser = require("cookie-parser");
  const connectToDb = require("./config/connectToDb");
  const notesController = require("./controllers/notesController");
  const usersController = require("./controllers/usersController");
  const requireAuth = require("./middleware/requireAuth");
  
  // Create an express app
  const app = express();
  
  // Configure express app
  app.use(express.json());// import dependencies
  const express = require("express");
  const cors = require ("cors");
  const connectToDb = require("./config/connectToDb");
  const Note = require("./models/note");
  const notesController = require("./controllers/notesControllers");
  const usersController = require("./controllers/userControllers");
  const requireAuth = require('./middleware/requireAuth');
  
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
  app.get('/check-auth',requireAuth,usersController.checkAuth);
  
  app.get("/notes", notesController.fetchNotes);
  app.get("/notes/:id", notesController.fetchNote);
  app.post("/notes", notesController.createNote);
  app.put("/notes/:id", notesController.updateNote);
  app.delete("/notes/:id", notesController.deleteNote);
  
  // start out server
  app.listen(process.env.PORT);
  
  app.use(cookieParser());
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
  
  // Connect to database
  connectToDb();
  
  // Routing
  app.post("/signup", usersController.signup);
  app.post("/login", usersController.login);
  app.get("/logout", usersController.logout);
  app.get("/check-auth", requireAuth, usersController.checkAuth);
  app.get("/notes", notesController.fetchNotes);
  app.get("/notes/:id", notesController.fetchNote);
  app.post("/notes", notesController.createNote);
  app.put("/notes/:id", notesController.updateNote);
  app.delete("/notes/:id", notesController.deleteNote);
  
  // Start our server
  app.listen(process.env.PORT);