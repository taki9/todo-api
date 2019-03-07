const todoContainer =  require('./container');
const fileStorage = require('../fileStorage');

module.exports = (req, res) => {
  const title = req.body.title || '';
  const todos = todoContainer.addTodo(title);

  fileStorage.updateTodoFile(todos);

  return res.send(todos);
}