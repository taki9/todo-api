module.exports = (req, res) => {
  const index = req.params.id;
  const todo = req.context.todoStorage.getTodoById(index);

  if (!todo) {
    throw new Error('The resource could not be found.|404|NOT_FOUND');
  }

  return res.send(todo);
};
