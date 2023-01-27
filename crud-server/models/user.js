const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:String,
  
});

const Note = mongoose.model('Note',noteSchema)