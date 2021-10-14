const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/user.model");

const MAX_AGE = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "net secret", {
    expiresIn: MAX_AGE,
  });
};

exports.userLogin = async function (req, res, next) {
  const { email, password } = req.body;
  const user = await login(email, password);
  const token = createToken(user._id);
  console.log(user);
  if (user.email) {
    res.cookie("jwt", token, { maxAge: MAX_AGE * 1000 });
    res.status(200).json({ user: user._id });
  } else {
    console.log(user.message);
    res.status(400).send({ error: user.message });
  }
};

exports.userSignup = async function (req, res, next) {
  const { email, password } = req.body;
  const login = String(email.split("@", [1]));
  const user = await User.create({ email, login, password });
  const token = createToken(user._id);

  res.cookie("jwt", token, { maxAge: MAX_AGE * 1000 });
  res.status(201).json({ user: user._id });
};

async function login(email, password) {
  const user = await User.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
  }

  return new Error("incorrect email or password!");
}

exports.users_get = async function (req, res, next) {
  const data = await User.find({});
  res.send(data);
};

exports.user_delete = async function (req, res, next) {
  result = await User.deleteMany({ _id: req.params.id });
  res.send(result);
};
