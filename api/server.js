const express = require('express');

const server = express();

const router =  require('./router');


server.use('/api', router);

module.exports = server;