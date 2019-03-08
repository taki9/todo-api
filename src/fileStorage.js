const fs = require('fs-extra');
const { getTodos } = require('./todos/container');

const file = 'todos.json';

const updateTodoFile = async () => {
  try {
    await fs.ensureFile(file);

    const todos = getTodos();

    fs.writeJSON(file, todos);
  } catch (err) {
    console.error(err);
  }
}

const readTodoFile = () => {
  const exists = fs.existsSync(file);

  if (!exists) {
    return [];
  }

  const todos = fs.readJsonSync(file);

  return todos;
}

module.exports = {
  updateTodoFile,
  readTodoFile
}
