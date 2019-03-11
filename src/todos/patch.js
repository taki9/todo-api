module.exports = (req, res) => {
  const todos = req.context.todoStorage.patchTodo(req.params.id, req.body);

  req.context.fileStorage.updateTodoFile(todos);

  return res.send(todos);
}