const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Route } = require('./routers');

const server = express();

server.use(cors());
server.use(bodyParser.raw());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

Route(server);

module.exports = server;