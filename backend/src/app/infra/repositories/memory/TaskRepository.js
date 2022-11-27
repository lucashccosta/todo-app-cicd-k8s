class TaskRepository
{
    constructor()
    {
        this.tasks = [];
    }

    static getInstance()
    {
        if (!this.instance) {
            this.instance = new TaskRepository();
        }

        return this.instance;
    }

    all()
    {
        return this.tasks;
    }

    create(task)
    {
        this.tasks.push(task);
    }

    remove(uuid)
    {
        this.tasks = this.tasks.filter(task => task.uuid !== uuid);
    }
}

module.exports = TaskRepository;
