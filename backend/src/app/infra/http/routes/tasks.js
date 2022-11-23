const { Router } = require('express');
const TaskService = require('../../../application/services/TaskService');
const TaskRepository = require('../../repositories/memory/TaskRepository');
const TaskController = require('../controllers/TaskController');

// const taskController = new TaskController(
//     new TaskService(
//         new TaskRepository()
//     )
// );

// const TaskService = new TaskService(new TaskRepository());

const routes = Router();
routes.get('/', TaskController.index);
routes.post('/', TaskController.store);
routes.delete('/:uuid', TaskController.delete);

module.exports = routes;
