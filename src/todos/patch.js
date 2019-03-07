const todoContainer =  require('./container');
const fileStorage = require('../fileStorage');

module.exports = (req, res) => {
  const index = parseInt(req.params.id);
  const title = req.body.title;

  const todos = todoContainer.patchTodo(index, title);

  fileStorage.updateTodoFile(todos);

  return res.send(todos);
}