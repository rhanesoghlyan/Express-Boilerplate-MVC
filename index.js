const express = require('express');
const server = require('./server');
const configs = require('./common/config/env');


const app = express();
const admin = express();

app.use('/admin', admin);

server.appStart(app, configs.front, true);
server.appStart(admin, configs.admin, false);
