const todoContainer =  require('./container');

module.exports = (req, res) => {
  const index = req.params.id;
  const todo = todoContainer.getTodoByIndex(index);

  return res.send(todo);
}