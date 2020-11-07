const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// CONNECT DB
require('./database');

// IMPORT ROUTER
const index = require('./routes');

// DEFINE APP
const app = express();
exports.app = app;

// DEFINE PORT
const port = process.env.PORT || 4000;

app.use(morgan('short'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(index);

// LAUNCH SERVER
app.listen(port);

