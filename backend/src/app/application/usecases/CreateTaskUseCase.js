class CreateTaskUseCase
{
    constructor(taskService)
    {
        this.taskService = taskService;
    }

    handle(data)
    {
        this.taskService.create(data);
    } 
}

module.exports = CreateTaskUseCase;
