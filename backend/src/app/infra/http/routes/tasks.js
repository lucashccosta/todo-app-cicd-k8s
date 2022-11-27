const { Router } = require('express');
const TaskController = require('../controllers/TaskController');

const routes = Router();
routes.get('/', TaskController.index);
routes.post('/', TaskController.store);
routes.delete('/:uuid', TaskController.delete);

module.exports = routes;
