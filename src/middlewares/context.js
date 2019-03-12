module.exports = context => (req, res, next) => {
  req.context = context;
  next();
};
