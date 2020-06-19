const mongoose = require('mongoose');

const connection = 'mongodb://localhost/tourschedule';

const db = mongoose.connect(connection);

module.exports = db;
