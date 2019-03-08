const fileStorage = require('./fileStorage');
const todoContainer = require('./todos/container');

module.exports = context => (req, res, next) => {
  req.context = context;
  next();
};
