const express = require('express');
const transactionRouter = express.Router();
const transArray = require('../models/transaction');

//do i need this right now?
// transactionRouter.use('/:id', (req, res, next) => {
//   let id = req.params.id;

//   if (!transArray[id]) {
//     return res.status(404).redirect('/error');
//   }
//   next();
// });

//index
transactionRouter.get('/', (req, res) => {
  res.json(transArray);
});

//show
transactionRouter.get('/:id', (req, res) => {
  let { id } = req.params;

  if (transArray[id]) {
    res.json(transArray[id]);
  } else {
    res.status(404).redirect('/error');
  }
});

//create
transactionRouter.post('/', (req, res) => {
  transArray.push(req.body);
  res.send('Added new transaction!');
});

//update
transactionRouter.put('/:id', (req, res) => {
  if (transArray[req.params.id]) {
    transArray[req.params.id] = req.body;
    res.json(req.body);
  } else {
    res.status(404).send('Could Not Update Transaction!');
  }
});

//delete
transactionRouter.delete('/:id', (req, res) => {
  if (transArray[req.params.id]) {
    const deletedTransaction = transArray.splice(req.params.id, 1);
    res.json(deletedTransaction);
  } else {
    res.status(404).send('could not delete transaction');
  }
});

module.exports = transactionRouter;
