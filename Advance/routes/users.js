const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Advance");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
});

export const User = mongoose.model("User", userSchema);
