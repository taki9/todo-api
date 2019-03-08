module.exports = (req, res) => {
  const title = req.body.title || '';
  const todos = req.context.todoContainer.addTodo(title);

  req.context.fileStorage.updateTodoFile(todos);

  return res.send(todos);
};
