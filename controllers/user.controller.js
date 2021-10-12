const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const bcrypt = require('bcrypt')

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({id}, 'net secret', {
        expiresIn: maxAge
    });
};

exports.user_signin = async function (req, res, next) {
    const {email, password} = req.body
    const user = await login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
}

exports.user_signup = async function (req, res, next) {
    const {email, password} = req.body
    const login = String(email.split('@', [1]))
    const user = await User.create({ email, login, password });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
}

async function login (email, password) {
    const user = await User.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect email');
  };











exports.users_get = async function (req, res, next) {
    const data = await User.find({});
    res.send(data);
}

exports.user_delete = async function (req, res, next) {
    result = await User.deleteMany(
        {_id: req.params.id},
    );
    res.send(result);
}


