const express = require('express');

// middlewares and routing
const bodyParser = require('body-parser');
const cors = require('cors');

const contextMiddleware = require('./middlewares/context');
const errorMiddleware = require('./middlewares/error');
const routes = require('./routes');

// context
const fileStorage = require('./fileStorage');
const inmemoryStorage = require('./inmemoryStorage');

const initContext = () => {
  const memoryStorage = inmemoryStorage();
  return { fileStorage, memoryStorage: memoryStorage };
};

const initInMemoryStorage = async context => {
  const todos = await context.fileStorage.readTodoFile();
  const users = await context.fileStorage.readUserFile();
  context.memoryStorage.setTodos(todos);
  context.memoryStorage.setUsers(users);
};

const initApp = context => {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());

  // const todos = express.Router();

  // todos.use(contextMiddleware(context));
  app.use(contextMiddleware(context));

  routes.forEach(route => {
    const method = route.method ? route.method.toLowerCase() : 'get';
    const handlers = route.preHandlers ? route.preHandlers.concat(route.handler) : route.handler
    return app[method](route.path, handlers);
  });

  // app.use('/todos', todos);
  app.use(errorMiddleware);

  return app;
};

const start = async port => {
  const context = initContext();
  await initInMemoryStorage(context);
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
