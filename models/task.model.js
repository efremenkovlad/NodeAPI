const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TasksSchema = new Schema({
    task: {type: String, required: true, max: 100},
    isCompleted: {type: Boolean, required: true},
});

module.exports = mongoose.model('Task', TasksSchema);