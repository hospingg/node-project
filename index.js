

const app = require('./application')
const http = require('http');
const PORT = 3000;
const server = http.createServer(app)


server.listen(PORT, () => {console.log(`App started on port ${PORT}`)})

