const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.get('authorization').replace(/Bearer\s?/g, '');

  if (!token) {
    throw new Error('Unauthorized|401|UNAUTHORIZED');
  }

  let userId = null;

  try {
    userId = jwt.verify(token, 'almafa').userId;
  } catch {
    throw new Error('Unauthorized|401|UNAUTHORIZED');
  }

  const user = req.context.memoryStorage.getUserById(userId);

  req.user = user;

  next();
};

const checkPermission = permission => (req, res, next) => {
  if (!req.user.permissions.includes(permission)) {
    throw new Error('Permission denied|403|FORBIDDEN');
  }

  next();
};

module.exports = {
  auth,
  checkPermission
};
