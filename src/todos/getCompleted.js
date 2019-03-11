module.exports = (req, res) => {
  const completed = req.context.todoContainer.getTodos(
    todos => todos.filter(todo => todo.completed)
  );

  return res.send(completed);
}