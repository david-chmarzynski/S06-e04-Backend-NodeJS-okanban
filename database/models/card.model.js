const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CARD SCHEMA WITH MONGOOSE
const cardSchema = Schema({
  title: { type: String, required: true },
  list_order: { type: Number, required: true },
  list_id: { type: Object, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: false }
});

const Card = mongoose.model('cards', cardSchema);

module.exports = Card;