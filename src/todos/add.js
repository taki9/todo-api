module.exports = (req, res) => {
  const title = req.body.title || '';
  const todos = req.context.todoStorage.addTodo(title);

  req.context.fileStorage.updateTodoFile(todos);

  return res.send(todos);
};
