module.exports = (req, res) => {
  const todos = req.context.todoContainer.patchTodo(req.params.id, req.body);

  req.context.fileStorage.updateTodoFile(todos);

  return res.send(todos);
}