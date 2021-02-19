const express = require('express');
const ResoureRouter = require('./resource/router')

const server = express();

server.use(express.json());
server.use('/api/resources', ResoureRouter)

module.exports = server;
