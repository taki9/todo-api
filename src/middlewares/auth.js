const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.get('authorization').replace(/Bearer\s?/g, '');

  if (!token) {
    throw new Error('Unauthorized|401|UNAUTHORIZED');
  }

  const { userId } = jwt.verify(token, 'almafa');

  if (!userId) {
    throw new Error('Unauthorized|401|UNAUTHORIZED');
  }

  const user = req.context.memoryStorage.getUserById(userId);

  req.user = user;

  next();
};

const checkPermission = permission => (req, res, next) => {
  if (!req.user.permissions.includes(permission)) {
    throw new Error('You have no permission for that!|403|FORBIDDEN');
  }

  next();
};

module.exports = {
  auth,
  checkPermission
};
