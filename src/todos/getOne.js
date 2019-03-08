module.exports = (req, res) => {
  const index = req.params.id;
  const todo = req.context.todoContainer.getTodoByIndex(index);

  return res.send(todo);
}