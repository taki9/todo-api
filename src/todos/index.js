module.exports = {
  // method, path
  list: require('./getAll'),
  show: require('./getOne'),
  completed: require('./getCompleted'),
  add: require('./add'),
  delete: require('./delete'),
  patch: require('./patch'),
  toggle: require('./toggle'),
  deleteAll: require('./deleteAll')
};
