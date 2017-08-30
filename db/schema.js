const mongoose = require('./connection.js')

const PostSchema = new mongoose.Schema({
  date: String,
  content: String
})

const Post = mongoose.model('Post', PostSchema)
module.exports = Post
