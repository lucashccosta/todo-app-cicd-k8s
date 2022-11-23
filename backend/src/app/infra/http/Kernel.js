const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const routes = require('../http/routes');
const errorMiddleware = require('./middlewares/ErrorMiddleware');

class Kernel 
{
    static instance()
    {
        const app = express();
        app.use(helmet());
        app.use(cors());
        app.use(express.json());
        app.use(routes);
        app.use(errorMiddleware);

        return app;
    }
}

module.exports = Kernel;
