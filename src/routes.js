const express = require('express');
const { createSessionController } = require('./controllers/SessionController');
const { createAuthMiddleware } = require('./middlewares/Auth');

class Routes {
  constructor() {
    this.routes = express.Router();
    this.sessionController = createSessionController();
    this.authMiddleware = createAuthMiddleware();
    this.configurePublicRoutes();
    this.configureMiddlewares();
    this.configureAuthenticatedRoutes();
  }

  configureMiddlewares() {
    this.routes.use(this.authMiddleware.validate);
  }

  configurePublicRoutes() {
    this.routes.get('/', (req, res) => res.send('Server running'));
    this.routes.post('/session', this.sessionController.create)
  }

  configureAuthenticatedRoutes() {
    this.routes.get('/session', this.sessionController.read);
  }
}

module.exports = {
  createRoutes: () => {
    return new Routes().routes;
  }
}