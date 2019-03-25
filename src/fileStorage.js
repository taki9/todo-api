const fs = require('fs-extra');

const TODO_FILE_NAME = 'todos.json';
const USER_FILE_NAME = 'users.json';

const updateTodoFile = async todos => {
  try {
    await fs.ensureFile(TODO_FILE_NAME);

    fs.writeJSON(TODO_FILE_NAME, todos);
  } catch (err) {
    console.error(err);
  }
};

const readFile = async (fileName) => {
  const exists = await fs.pathExists(fileName);

  if (!exists) {
    return [];
  }

  const todos = await fs.readJsonSync(fileName);

  return todos;
};

module.exports = {
  updateTodoFile,
  readTodoFile: readFile.bind(null, TODO_FILE_NAME),
  readUserFile: readFile.bind(null, USER_FILE_NAME)
};
