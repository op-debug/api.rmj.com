require('dotenv').config();
const http = require('http');
const server = require('./server');
const app = http.createServer(server);

const port = process.env.PORT

app.listen(port, () => console.log('Server run on port: ', port))