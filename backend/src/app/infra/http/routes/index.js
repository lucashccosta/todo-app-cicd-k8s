const { Router } = require('express');

const taskRoutes = require('./tasks');

const routes = Router();
routes.use('/tasks', taskRoutes);

module.exports = routes;