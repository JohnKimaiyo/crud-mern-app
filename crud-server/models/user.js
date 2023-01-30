const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
  },
  password: {
    type: String.apply,
    required: true,
  },
});

const User = mongoose.model("Note", noteSchema);

module.exports = User;
