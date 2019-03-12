const shortid = require('shortid');

module.exports = () => {
  let todos = [];

  const getTodos = filterFn => (filterFn ? filterFn(todos) : todos);

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

  const patchTodo = (patchId, newProps) =>
    todos.map(todo =>
      todo.id === patchId ? Object.assign(todo, newProps) : todo
    );

  const deleteTodo = deleteId =>
    (todos = todos.filter(todo => todo.id !== deleteId));

  const clearTodos = filterFn => (filterFn ? filterFn(todos) : []);

  return {
    getTodos,
    setTodos,
    getTodoById,
    addTodo,
    patchTodo,
    deleteTodo,
    clearTodos
  };
};
