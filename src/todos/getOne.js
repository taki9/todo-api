module.exports = (req, res) => {
  const index = req.params.id;
  const todo = req.context.todoStorage.getTodoById(index);

  return res.send(todo);
}