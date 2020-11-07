const { findAllLists, createList, getPageOrder, deleteList } = require('../queries/lists.queries');

exports.getLists = async (req, res, next) => {
  try {
    const lists = await findAllLists();
    res.json({
      listArray: lists
    })
  } catch (error) {
    console.log(error);
  }
};

exports.addList = async (req, res, next) => {
  try {
    const body = req.body;
    const page_order = await getPageOrder();
    const newList = await createList(body, page_order);
    res.status(200).json({
      message: "Nouvelle liste créée",
      newList: newList
    });
  } catch (error) {
    res.json({ error: [error.message] });
  }
};

exports.deleteList = async (req, res, next) => {
  const listId = req.body.list_id;
  try {
    await deleteList(listId);
    res.status(200).json({
      message: "La liste a bien été supprimée"
    });
  } catch (error) {
    console.log(error);
  }
};
