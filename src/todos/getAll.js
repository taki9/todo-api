module.exports = (req, res) => {
  return res.send(req.context.todoStorage.getTodos());
};
