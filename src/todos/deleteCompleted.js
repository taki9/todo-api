module.exports = (req, res) => {
  const todos = req.context.todoContainer.clearTodos(
    todos => todos.filter(todo => !todo.completed)
  );

  req.context.fileStorage.updateTodoFile(todos);

  return res.send(todos);
}