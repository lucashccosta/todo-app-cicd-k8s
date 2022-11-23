const TaskFactory = require('../../domain/factories/TaskFactory');

class TaskService
{
    constructor(taskRepository) 
    {
        this.taskRepository = taskRepository;
    }

    all()
    {
        return this.taskRepository.all();
    }

    create(data)
    {
        const task = TaskFactory.create(data);

        this.taskRepository.create(task);
    }

    remove({ uuid })
    {
        this.taskRepository.remove(uuid);
    }
}

module.exports = TaskService;
