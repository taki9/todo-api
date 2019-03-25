module.exports = (req, res) => {
  let todos = []

  if (req.query.filter && req.query.filter === 'completed') {
    todos = req.context.memoryStorage.clearUserCompletedTodos(req.user.id);
  } else {
    todos = req.context.memoryStorage.clearUserTodos(req.user.id);
  }

  req.context.fileStorage.updateTodoFile(req.context.memoryStorage.getTodos());

  return res.send(todos);
};
