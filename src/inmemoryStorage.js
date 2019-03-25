const shortid = require('shortid');

module.exports = () => {
  let todos = [];
  let users = [];

  const getTodos = filterFn => (filterFn ? filterFn(todos) : todos);

  const getUserTodos = (userId, filterFn) =>
    getTodos(filterFn).filter(todo => todo.userId === userId);

  const setTodos = initial => (todos = initial);

  const getTodoById = (id, userId) => todos.find(todo => todo.id === id && todo.userId === userId);

  const addTodo = (title, userId) => {
    const todo = {
      id: shortid.generate(),
      title,
      userId,
      completed: false
    };

    todos.push(todo);
    return todo;
  };

  const patchTodo = (patchId, newProps) =>
    (todos = todos.map(todo => (todo.id === patchId ? Object.assign(todo, newProps) : todo)));

  const deleteTodo = deleteId => (todos = todos.filter(todo => todo.id !== deleteId));

  const clearUserTodos = userId => {
    todos = todos.filter(todo => todo.userId !== userId);
    return [];
  };

  const clearUserCompletedTodos = userId => {
    todos = todos.filter(todo => (!todo.completed && todo.userId === userId) || todo.userId !== userId);
    return todos.filter(todo => todo.userId === userId);
  };

  const getUsers = () => users;

  const setUsers = initial => (users = initial);

  const getUserById = id => users.find(user => user.id === id);

  const authenticateUser = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    return Object.assign({}, user, { password: undefined });
  };

  return {
    getTodos,
    getUserTodos,
    setTodos,
    getTodoById,
    addTodo,
    patchTodo,
    deleteTodo,
    clearUserTodos,
    clearUserCompletedTodos,
    getUsers,
    setUsers,
    getUserById,
    authenticateUser
  };
};
