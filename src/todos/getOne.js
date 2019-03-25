module.exports = (req, res) => {
  const todo = req.context.memoryStorage.getTodoById(req.params.id, req.user.id);

  if (!todo) {
    throw new Error('The resource could not be found.|404|NOT_FOUND');
  }

  return res.send(todo);
};
