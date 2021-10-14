const mongoose = require("mongoose");
const { isEmail } = require("validator");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

let UserShema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lovercase: true,
    validate: [isEmail, "enter valid email"],
  },
  login: {
    type: String,
    required: true,
    max: 16,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Min length 6 symbols"],
  },
});

UserShema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", UserShema);
