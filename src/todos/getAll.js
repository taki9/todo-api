const todoContainer =  require('./container');

module.exports = (req, res) => {
  return res.send(todoContainer.getTodos());
}