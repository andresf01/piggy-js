const mongoose = require('mongoose')
const UserSchema = require('../models/user')
// const { mongodb } = require('../../config')
const mongodb = "mongodb://localhost/rankjs"
mongoose.connect(mongodb, { useNewUrlParser: true })

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to db')
});

var User = db.model("User", UserSchema)

module.exports.db = db
module.exports.User = User