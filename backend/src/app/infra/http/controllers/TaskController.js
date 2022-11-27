const HttpStatusCode = require('../../../application/enums/HttpStatusCode');
const UseCaseFactory = require('../../../application/factories/UseCaseFactory');

class TaskController
{
    static index(req, res)
    {
        const tasks = (UseCaseFactory.createListTasksUseCase()).handle();

        return res.status(HttpStatusCode.OK).json(tasks);
    } 

    static store(req, res)
    {
        (UseCaseFactory.createInsertTaskUseCase()).handle(req.body);

        return res.status(HttpStatusCode.CREATED).send();
    }

    static delete(req, res)
    {
        (UseCaseFactory.createDeleteTaskUseCase()).handle(req.params);

        return res.status(HttpStatusCode.NO_CONTENT).send();
    }
}

module.exports = TaskController;
