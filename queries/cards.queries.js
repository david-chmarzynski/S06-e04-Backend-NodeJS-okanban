const Card = require('../database/models/card.model');

// GET ALL CARDS
exports.getCards = async () => {
  return Card.find().exec();
};

// CREATE A NEW CARD
exports.createCard = async (body, list_order) => {
  try {
    const newCard = new Card({
      title: body.title,
      list_order: list_order,
      list_id: body.list_id,
      created_at: Date.now()
    });
    return newCard.save();
  } catch (error) {
    console.log(error);
  }
};

// GET LIST ORDER
exports.getListOrder = async (listId) => {
  let list_order = null;
  try {
    const cards = await Card.find({ list_id: listId }).exec();
    if(cards.length === 0) {
      return list_order = 1;
    } else if (cards.length !== 0) {
      let listOrders = [];
      cards.map(card => {
        listOrders.push(card.list_order);
      });
      return list_order = Math.max(...listOrders) + 1;
    }
  } catch (error) {
    console.log(error);
  }
};

// DELETE AN EXISTING CARD
exports.deleteCard = async (cardId) => {
  return Card.findByIdAndDelete(cardId).exec();
};