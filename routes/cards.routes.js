const router = require('express').Router();
const { getCards, addCard, deleteCard } = require('../controllers/cards.controller');

router.post('/add', addCard);
router.delete('/delete', deleteCard);
router.get('/', getCards);

module.exports = router;