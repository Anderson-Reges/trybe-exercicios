// src/app.js

const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const teamsRouter = require('./routers/teamsRouters');
const apiCredentials = require('./middlewares/apiCredentials');

const app = express();

app.use(apiCredentials);
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/teams', teamsRouter)


module.exports = app;