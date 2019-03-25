module.exports = (req, res) => {
  if (req.query.filter && req.query.filter === 'completed') {
    return res.send(req.context.memoryStorage.getUserTodos(req.user.id, todos =>
      todos.filter(todo => todo.completed)
    ));
  }

  return res.send(req.context.memoryStorage.getUserTodos(req.user.id));
};
