const bodyParser = require('body-parser');
const express = require('express');
const {
  getAllController,
  getAccountByIdLazy,
  getCommentsById,
  saveAccountAndProfile,
  saveComment } = require('./controllers/account.controller');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/account/:id', getAllController);
app.get('/accounts-v2/:id', getAccountByIdLazy);
app.get('/accounts/:id/comments', getCommentsById);
app.post('/accounts', saveAccountAndProfile);
app.post('/accounts/:id/comment', saveComment);

module.exports = app;
