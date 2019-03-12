const todoContoller = require('../todos/index');

module.exports = [
  {
    path: '/',
    handler: todoContoller.list
  },
  {
    path: '/:id',
    handler: todoContoller.show
  },
  {
    path: '/completed',
    handler: todoContoller.completed
  },
  {
    method: 'post',
    path: '/',
    handler: todoContoller.add
  },
  {
    method: 'delete',
    path: '/:id',
    handler: todoContoller.delete
  },
  {
    method: 'put',
    path: '/:id',
    handler: todoContoller.patch
  },
  {
    method: 'delete',
    path: '/',
    handler: todoContoller.deleteAll
  },
  {
    method: 'delete',
    path: '/completed',
    handler: todoContoller.deleteCompleted
  }
];
