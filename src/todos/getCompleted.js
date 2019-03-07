const todoContainer =  require('./container');

module.exports = (req, res) => {
  const completed = todoContainer.getTodos().filter(todo => todo.completed);

  return res.send(completed);
}