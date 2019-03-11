module.exports = (req, res) => {
  const todos = req.context.todoStorage.deleteTodo(req.params.id);

  req.context.fileStorage.updateTodoFile(todos);

  return res.send(todos);
}