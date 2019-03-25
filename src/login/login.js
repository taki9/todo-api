const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  const { username, password } = req.body;

  const me = req.context.memoryStorage.authenticateUser(username, password);

  if (!me) {
    throw new Error('The resource could not be found.|404|NOT_FOUND');
  }

  const token = jwt.sign({ userId: me.id }, 'almafa', {
    expiresIn: '30 days'
  });

  return res.send({ token, me });
};
