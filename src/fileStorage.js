const fs = require('fs-extra');
const { getTodos } = require('./todos/container');

const FILE_NAME = 'todos.json';

const updateTodoFile = async () => {
  try {
    await fs.ensureFile(FILE_NAME);

    const todos = getTodos();

    fs.writeJSON(FILE_NAME, todos);
  } catch (err) {
    console.error(err);
  }
}

const readTodoFile = () => {
  // Sync-es függvényeket nem kéne használni
  const exists = fs.existsSync(FILE_NAME);

  if (!exists) {
    return [];
  }

  const todos = fs.readJsonSync(FILE_NAME);

  return todos;
}

module.exports = {
  updateTodoFile,
  readTodoFile
}
