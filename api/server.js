const express = require('express');
const ResoureRouter = require('./resource/router')
const ProjectRouter = require('./project/router')

const server = express();

server.use(express.json());
server.use('/api/resources', ResoureRouter)
server.use('/api/projects', ProjectRouter)

module.exports = server;
