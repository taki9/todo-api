let todos = [];

const getTodos = () => todos

const setTodos = initial => todos = initial

const getTodoByIndex = index => todos[index]

const addTodo = (title) => {
  todos.push({
    title,
    completed: false
  })

  return todos;
}

const patchTodo = (patchIndex, newTitle) => {
  todos = todos.map((todo, index) =>
    patchIndex === index ?
      Object.assign(todo, { title: newTitle }) :
      todo
  );

  return todos;
}

const deleteTodo = (deleteIndex) => {
  todos = todos.filter((_, index) => index !== deleteIndex);

  return  todos;
}

const toggleTodo = (toggleIndex) => {
  todos = todos.map((todo, index) =>
    toggleIndex === index ?
      Object.assign(todo, { completed: !todo.completed }) :
      todo
  )

  return todos;
}

const clearAllTodos = () => {
  todos = [];

  return todos;
}

module.exports = {
  getTodos,
  setTodos,
  getTodoByIndex,
  addTodo,
  patchTodo,
  toggleTodo,
  deleteTodo,
  clearAllTodos
};