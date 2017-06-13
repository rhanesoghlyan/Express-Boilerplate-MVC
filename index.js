const server = require('./server');
const express = require('express');
const app = express();
server.appStart(app);