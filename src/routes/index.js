const auth = require('../middlewares/auth').auth;

const todoContoller = require('../todos');
const loginController = require('../login');

module.exports = [
  {
    path: '/todos',
    preHandlers: [auth],
    handler: todoContoller.list
  },
  {
    path: '/todos/:id',
    preHandlers: [auth],
    handler: todoContoller.show
  },
  {
    method: 'post',
    path: '/todos/',
    preHandlers: [auth],
    handler: todoContoller.add
  },
  {
    method: 'delete',
    path: '/todos/:id',
    preHandlers: [auth],
    handler: todoContoller.delete
  },
  {
    method: 'put',
    path: '/todos/:id',
    preHandlers: [auth],
    handler: todoContoller.patch
  },
  {
    method: 'delete',
    path: '/todos/',
    preHandlers: [auth],
    handler: todoContoller.deleteMany
  },
  {
    method: 'post',
    path: '/login',
    handler: loginController.login
  },
  {
    method: 'put',
    path: '/login',
    handler: loginController.renew
  }
];
