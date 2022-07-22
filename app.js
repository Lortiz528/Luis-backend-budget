const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

const transactionController = require('./controllers/transactions');

app.get('/', (req, res) => {
  res.send('Welcome to the budget app!');
});

app.use('/transactions', transactionController);

app.use('/*', (req, res) => {
  res.status(404).send('Not Found!');
});



module.exports = app;
