const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://anitdias3:anit2193@cluster0.bdtfzf9.mongodb.net/");

const createSchema = mongoose.Schema({
  title:String,
  description:String,
  completed:{ type: Boolean, default: false }
})

const todo = mongoose.model('todo',createSchema);

module.exports = {todo};