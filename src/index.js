const express = require('express');
const bodyParser = require('body-parser');

// middlewares and controllers
const contextMiddleware = require('./context');
const routes = require('./routes');

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

  routes.forEach(route => {
    const method = route.method ? route.method.toLowerCase() : 'get';
    return todos[method](route.path, route.handler)
  });

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
