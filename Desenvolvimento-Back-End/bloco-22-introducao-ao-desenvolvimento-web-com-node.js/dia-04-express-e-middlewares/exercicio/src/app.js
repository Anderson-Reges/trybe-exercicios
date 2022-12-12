const express = require('express');
const validationName = require('./middlewares/validationName')
const validationDescription = require('./middlewares/validationDescription');
const validationPrice = require('./middlewares/validationPrice');
const validationCreatedAt = require('./middlewares/validateCreatedAt');
const validationRating = require('./middlewares/validateCreatedAt');
const validationDifficulty = require('./middlewares/validationDifficulty');
const validationToken = require('./middlewares/validationToken');
const generateToken = require('./utils/generateToken');

const app = express();

app.use(express.json());

app.post('/signup', validationToken, (req, res) => {
  const { email, password, firstName, phone } = req.body

  if(![email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: '401 - Unauthorized' })
  }

  const token = generateToken();

  if(token) {
    return res.status(200).json({ token: `${token}` })
  }
})

app.post('/activities',
validationName, validationPrice,
validationDescription, validationCreatedAt,
validationRating, validationDifficulty, async (req, res) => {
  return res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
})

module.exports = app;