const router = require('express').Router();
const lists = require('./lists.routes');
const cards = require('../routes/cards.routes');

// LISTS ROUTES
router.use('/lists', lists);
// CARDS ROUTES
router.use('/cards', cards);
// HOME ROUTE
router.get('/', (req, res) => {
  res.json({ message: "Okanban Hello" });
});

module.exports = router;