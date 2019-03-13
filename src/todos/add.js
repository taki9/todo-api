module.exports = (req, res) => {
  const title = req.body.title || '';
  const todo = req.context.todoStorage.addTodo(title);
  const todos = req.context.todoStorage.getTodos();

  req.context.fileStorage.updateTodoFile(todos);

  return res.send(todo);
};
