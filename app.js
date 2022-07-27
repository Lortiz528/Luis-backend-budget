const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

const transactionController = require('./controllers/transactions');

app.get('/', (req, res) => {
  res.send(`<h1 style="text-align:center;font-family: 'Courier New', Courier, monospace;">Welcome to Budget Budget Backend!</h1>
  <p style="text-align:center; font-family: 'Courier New', Courier, monospace;"><a href="https://github.com/Lortiz528/Luis-backend-budget">Link to the Repo</a></p>`);
});

app.use('/transactions', transactionController);

app.use('/*', (req, res) => {
  res.status(404).send('Not Found!');
});

module.exports = app;
