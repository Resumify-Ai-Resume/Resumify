const mongoose = require("mongoose");
// User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  uid: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
