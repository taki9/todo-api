const express = require('express');
const bodyParser = require('body-parser');
const todoController = require('./src/todos');
const fileStorage = require('./src/fileStorage');
const { setTodos } = require('./src/todos/container');

const app = express();
const port = 8000;

app.use(bodyParser.json());

const todos = express.Router();

todos.get('/', todoController.list);
todos.get('/completed', todoController.completed);
todos.get('/:id', todoController.show);
todos.put('/', todoController.add);
todos.delete('/all', todoController.deleteAll);
todos.delete('/:id', todoController.delete);
todos.post('/:id', todoController.patch);
todos.patch('/:id', todoController.toggle);

app.use('/todo', todos);

app.listen(port, err => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }

  setTodos(fileStorage.readTodoFile());
  console.log(`Fut a szerver a ${port} porton.`);
})
