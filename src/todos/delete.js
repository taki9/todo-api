const todoContainer =  require('./container');
const fileStorage = require('../fileStorage');

module.exports = (req, res) => {
  const index = parseInt(req.params.id);
  const todos = todoContainer.deleteTodo(index);

  fileStorage.updateTodoFile(todos);

  return res.send(todos);
}