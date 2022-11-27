const AppException = require('../../../application/exceptions/AppException');
const HttpStatusCode = require('../../../application/enums/HttpStatusCode');
const AppExceptionFactory = require('../../../application/factories/AppExceptionFactory');

module.exports = (error, req, res) => {
    if (error instanceof AppException) {
        return res.status(error.statusCode).json(AppExceptionFactory.create(error));
    }

    return res.status(HttpStatusCode.SERVER_ERROR).json(AppExceptionFactory.create(error));
};
