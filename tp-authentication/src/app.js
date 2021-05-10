const express = require('express');

const hostname = '0.0.0.0';
const port = 3000;

const server = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/apinode');

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

const userRoute = require('./routes/userRoute');
userRoute(server);

const postRoute = require('./routes/postRoute');
postRoute(server);

const commentRoute = require('./routes/commentRoute');
commentRoute(server);

const front = require("./front/index");

server.use(front);

server.listen(port, hostname, () => {
    console.log(`The server is started on ${hostname}:${port}.`);
});