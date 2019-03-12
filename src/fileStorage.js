const fs = require('fs-extra');
const inmemoryStorage = require('./inmemoryStorage');

const FILE_NAME = 'todos.json';

const updateTodoFile = async todos => {
  try {
    await fs.ensureFile(FILE_NAME);

    fs.writeJSON(FILE_NAME, todos);
  } catch (err) {
    console.error(err);
  }
};

const readTodoFile = async () => {
  const exists = await fs.pathExists(FILE_NAME);

  if (!exists) {
    return [];
  }

  const todos = await fs.readJsonSync(FILE_NAME);

  return todos;
};

module.exports = {
  updateTodoFile,
  readTodoFile
};
