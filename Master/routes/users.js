const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Master");

const userSchema = mongoose.Schema({
  userName: String,
  nickName: String,
  name: String,
  discription: String,
  catogaries: [],
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", userSchema);
