class DeleteTaskUseCase
{
    constructor(taskService)
    {
        this.taskService = taskService;
    }

    handle(data)
    {
        this.taskService.remove(data);
    } 
}

module.exports = DeleteTaskUseCase;
