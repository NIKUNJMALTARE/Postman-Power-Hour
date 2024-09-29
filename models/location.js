const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const dataSchema = new Schema({
  name: String,
  address: String,
  pincode: Number,
  description: String
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;