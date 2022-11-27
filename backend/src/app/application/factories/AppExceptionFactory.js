class AppExceptionFactory
{
    static create(error)
    {
        return {
            status: 'error',
            message: error.message,
            exception: error.stack
        };
    }
}

module.exports = AppExceptionFactory;
