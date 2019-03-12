module.exports = (req, res) => {
  const todos = req.context.todoStorage.clearTodos();

  req.context.fileStorage.updateTodoFile(todos);

  return res.send(todos);
};
