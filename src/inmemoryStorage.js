const shortid = require('shortid');

module.exports = () => {
  let todos = [];

  const getTodos = function () {
    return todos;
  };

  const setTodos = initial => (todos = initial);

  const getTodoById = id => todos.find(todo => todo.id === id);

  const addTodo = title => {
    todos.push({
      id: shortid.generate(),
      title,
      completed: false
    });

    return todos;
  };

  const patchTodo = (patchId, newProps) => {
    todos = todos.map((todo) => (todo.id === patchId ? Object.assign(todo, newProps) : todo));

    return todos;
  };

  const deleteTodo = deleteId => {
    todos = todos.filter((todo) => todo.id !== deleteId);

    return todos;
  };

  const clearAllTodos = () => {
    todos = [];

    return todos;
  };

  return {
    getTodos,
    setTodos,
    getTodoById,
    addTodo,
    patchTodo,
    deleteTodo,
    clearAllTodos
  };
};
