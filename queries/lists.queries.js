const List = require('../database/models/list.model');

// FIND ALL LISTS
exports.findAllLists = async () => {
  return List.find().exec();
};

exports.createList = async (body, page_order) => {
  // DEBUG
  // console.log(body);
  // console.log(page_order);
  try {
    const newList = new List({
      name: body.name,
      page_order: page_order,
      created_at: Date.now()
    });
    return newList.save();
  } catch (error) {
    // DEBUG
    console.log(error);
  }
};

exports.getPageOrder = async () => {
  let page_order = null;
  try {
    const lists = await List.find().exec();
    if(lists === []) {
      return page_order = 1;
    } else {
      let orders = [];
      lists.map(list => {
        orders.push(list.page_order);
      });
      return page_order = Math.max(...orders) + 1;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteList = async (listId) => {
  return List.findByIdAndDelete(listId).exec();
};
