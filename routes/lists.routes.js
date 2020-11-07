const router = require('express').Router();
const { addList, getLists, deleteList } = require('../controllers/lists.controller');

router.post('/add', addList);
router.delete('/delete', deleteList);
router.get('/', getLists);

module.exports = router;