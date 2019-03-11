module.exports = {
  list: require('./getAll'),
  show: require('./getOne'),
  completed: require('./getCompleted'),
  add: require('./add'),
  delete: require('./delete'),
  patch: require('./patch'),
  deleteAll: require('./deleteAll'),
  deleteCompleted: require('./deleteCompleted')
};
