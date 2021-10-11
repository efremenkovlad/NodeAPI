const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserShema = new Schema({
    email: {type: String, required: true, max: 16},
    login: {type: String, required: true, max: 16},
    password: {type: String, required: true, max: 16},
});

module.exports = mongoose.model('User', UserShema);