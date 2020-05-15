const express = require('express');
const cors = require('cors');
const { createRoutes } = require('./routes');
const { createLogMiddleware } = require('./middlewares/Log');

class App {
  constructor() {
    this.server = express();
    this.logMiddleware = createLogMiddleware();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(this.logMiddleware.requestLog);
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(createRoutes());
  }
}

module.exports = {
  createApp: () => {
    return new App().server
  }
}