const express = require('express');
const transactionRouter = express.Router();
const transArray = require('../models/transaction');

transactionRouter.use('/:id', (req, res, next) => {
  let id = req.params.id;

  if (!transArray[id]) {
    return res.status(404).redirect('/error');
  }
  next();
});

transactionRouter.get('/', (req, res) => {
  res.json(transArray);
});

transactionRouter.get('/:id', (req, res) => {
  let { id } = req.params;

  if (transArray[id]) {
    res.json(transArray[id]);
  } else {
    res.status(404).redirect('/error');
  }
});
module.exports = transactionRouter;
