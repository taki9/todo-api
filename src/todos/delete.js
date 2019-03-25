module.exports = (req, res) => {
  const todo = req.context.memoryStorage.getTodoById(req.params.id, req.user.id);

  if (!todo) {
    throw new Error('The resource could not be found.|404|NOT_FOUND');
  }

  const todos = req.context.memoryStorage.deleteTodo(req.params.id);

  console.log(todos, req.user.id);

  req.context.fileStorage.updateTodoFile(todos);

  return res.send(todos.filter(todo => todo.userId === req.user.id));
};
