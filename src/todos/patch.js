module.exports = (req, res) => {
  const todo = req.context.todoStorage.getTodoById(req.params.id);

  if (!todo) {
    throw new Error('The resource could not be found.|404|NOT_FOUND');
  }

  const todos = req.context.todoStorage.patchTodo(req.params.id, req.body);
  req.context.fileStorage.updateTodoFile(todos);

  return res.send(todo);
};
