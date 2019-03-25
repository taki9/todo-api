module.exports = (req, res) => {
  const todo = req.context.memoryStorage.getTodoById(req.params.id, req.user.id);

  if (!todo) {
    throw new Error('The resource could not be found.|404|NOT_FOUND');
  }

  const todos = req.context.memoryStorage.patchTodo(req.params.id, req.body);
  req.context.fileStorage.updateTodoFile(todos);

  return res.send(todo);
};
