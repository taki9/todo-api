const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  const { prevJwt } = req.body;

  let userId = null;

  try {
    userId = jwt.verify(token, 'almafa').userId;
  } catch {
    throw new Error('Unauthorized|401|UNAUTHORIZED');
  }

  const me = req.context.memoryStorage.getUserById(userId);

  if (!me) {
    throw new Error('The resource could not be found.|404|NOT_FOUND');
  }

  const token = jwt.sign({ userId: me.id }, 'almafa');

  return res.send({ token, me });
};
