const mongoose = require('mongoose')
var Schema = mongoose.Schema

var user_schema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true},
  inbox: Array
})

module.exports = user_schema