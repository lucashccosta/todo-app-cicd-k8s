class ListTasksUseCase
{
    constructor(taskService)
    {
        this.taskService = taskService;
    }

    handle()
    {
        return this.taskService.all();
    } 
}

module.exports = ListTasksUseCase;
