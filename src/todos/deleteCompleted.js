module.exports = (req, res) => {
  const todos = req.context.todoStorage.clearTodos(todos =>
    todos.filter(todo => !todo.completed)
  );

  req.context.fileStorage.updateTodoFile(todos);

  return res.send(todos);
};
