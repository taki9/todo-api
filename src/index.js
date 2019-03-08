const express = require('express');
const bodyParser = require('body-parser');

// middlewares and controllers
const contextMiddleware = require('./context');
const todoController = require('./todos');

// context
const fileStorage = require('./fileStorage');
const todoStorage = require('./inmemoryStorage');

const initContext = () => {
  const todoContainer = todoStorage();
  return { fileStorage, todoContainer };
};

const initContainer = async context => {
  const fileContent = await context.fileStorage.readTodoFile();
  context.todoContainer.setTodos(fileContent);
};

const initApp = context => {
  const app = express();

  app.use(bodyParser.json());

  const todos = express.Router();

  todos.use(contextMiddleware(context));

  // TODO: biztosítani, hogy adott végpont bármilyen method-dal ugyanazzal térjen vissza (rest standard)
  todos.get('/', todoController.list);
  todos.get('/completed', todoController.completed);
  todos.get('/:id', todoController.show);
  todos.post('/', todoController.add);
  todos.delete('/completed', todoController.deleteCompleted)
  todos.delete('/all', todoController.deleteAll);
  todos.delete('/:id', todoController.delete);
  todos.put('/:id', todoController.patch);

  app.use('/todo', todos);

  return app;
};

const start = async port => {
  const context = initContext();
  await initContainer(context);
  const app = initApp(context);

  app.listen(port, err => {
    if (err) {
      console.log(err);
      return process.exit(1);
    }

    console.log(`Fut a szerver a ${port} porton.`);
  });
};

start(8000);
