const todoContainer =  require('./container');
const fileStorage = require('../fileStorage');

module.exports = (req, res) => {
  const todos = todoContainer.clearAllTodos();

  fileStorage.updateTodoFile(todos);

  return res.send(todos);
}