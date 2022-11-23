const TaskRepository = require('../../infra/repositories/memory/TaskRepository');
const TaskService = require('../services/TaskService');
const CreateTaskUseCase = require('../usecases/CreateTaskUseCase');
const DeleteTaskUseCase = require('../usecases/DeleteTaskUseCase');
const ListTasksUseCase = require('../usecases/ListTasksUseCase');

class UseCaseFactory
{
    static createListTasksUseCase()
    {
        return new ListTasksUseCase(new TaskService(TaskRepository.getInstance()));
    }

    static createInsertTaskUseCase()
    {
        return new CreateTaskUseCase(new TaskService(TaskRepository.getInstance()));
    }

    static createDeleteTaskUseCase()
    {
        return new DeleteTaskUseCase(new TaskService(TaskRepository.getInstance()));
    }
}

module.exports = UseCaseFactory;
