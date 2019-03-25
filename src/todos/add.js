module.exports = (req, res) => {
  const title = req.body.title || '';
  const todo = req.context.memoryStorage.addTodo(title, req.user.id);
  const todos = req.context.memoryStorage.getTodos();

  req.context.fileStorage.updateTodoFile(todos);

  return res.send(todo);
};
