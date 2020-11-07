const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// LIST SCHEMA WITH MONGOOSE
const listSchema = Schema({
  name: { type: String, required: true },
  page_order: { type: Number, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: false }
});

const List = mongoose.model('lists', listSchema);

module.exports = List;