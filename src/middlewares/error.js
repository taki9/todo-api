module.exports = (err, req, res, next) => {
  const [message, status = '500', code = 'SOMETHING_WENT_WRONG'] = err.message.split('|');

  res
    .status(status)
    .send({
      message: status === '500' ? 'Something went wrong' : message,
      status: Number(status),
      code
    });
  next();
};
