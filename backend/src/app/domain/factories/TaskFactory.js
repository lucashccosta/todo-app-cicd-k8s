const Task = require('../entities/Task');
const { v4: uuidv4 } = require('uuid')

class TaskFactory
{
    static create({ description })
    {
        return new Task(
            uuidv4(),
            description,
            new Date()
        );
    }
}

module.exports = TaskFactory;
