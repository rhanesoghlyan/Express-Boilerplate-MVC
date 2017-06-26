const mongoose = require('mongoose');
const connection = require('../index');

connection.connect();

let ExampleScheme = new mongoose.Schema({
    name: {type: String, required: true}
});

module.exports = mongoose.model('Example', ExampleScheme);
