const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;