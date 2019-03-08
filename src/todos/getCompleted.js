const todoContainer =  require('./container');

module.exports = (req, res) => {
  // TODO: getTodos kaphat vmi filter paramétert, és képes filterezni magán belül
  const completed = todoContainer.getTodos().filter(todo => todo.completed);

  return res.send(completed);
}