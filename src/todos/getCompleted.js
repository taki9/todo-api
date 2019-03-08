module.exports = (req, res) => {
  // TODO: getTodos kaphat vmi filter paramétert, és képes filterezni magán belül
  const completed = req.context.todoContainer.getTodos().filter(todo => todo.completed);

  return res.send(completed);
}