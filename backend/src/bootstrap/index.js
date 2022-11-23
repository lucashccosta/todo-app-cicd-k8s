const http = require('http');
const app = require('../app/infra/http/Kernel');
const server = http.createServer(app.instance());
const port = process.env.APP_PORT || 3030;

server.listen(port, () => {
    console.log(`🚀 Todo API started on ${port} port`);
});
