module.exports = (req, res) => {
  const todos = req.context.todoContainer.clearAllTodos();

  req.context.fileStorage.updateTodoFile(todos);

  return res.send(todos);
}