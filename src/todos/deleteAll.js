module.exports = (req, res) => {
  const todos = req.context.todoContainer.clearTodos();

  req.context.fileStorage.updateTodoFile(todos);

  return res.send(todos);
}