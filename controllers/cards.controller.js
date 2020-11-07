const { getCards, getListOrder, createCard, deleteCard } = require('../queries/cards.queries');

exports.getCards = async (req, res, next) => {
  try {
    const cards = await getCards();
    res.json({
      cardsArray: cards
    });
  } catch (error) {
    console.log(error);
  }
};

exports.addCard = async (req, res, next) => {
  try {
    const body = req.body;
    const listId = req.body.list_id;
    const list_order = await getListOrder(listId);
    const newCard = await createCard(body, list_order);
    res.status(200).json({
      message: "Nouvelle carte créée",
      newCard: newCard
    })
  } catch (error) {
    res.json({ error: [error.message] });
  }
};

exports.deleteCard = async (req, res, next) => {
  const cardId = req.body.card_id;
  try {
    await deleteCard(cardId);
    res.status(200).json({
      message: "La carte a bien été supprimée"
    });
  } catch (error) {
    console.log(error);
  }
};