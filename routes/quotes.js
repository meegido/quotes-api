const express = require('express');
const createQuote = require("../domain/quotes/actions/createQuote");
const retrieveQuotes = require("../domain/quotes/actions/retrieveQuotes");
const QuotesMongoRepo = require("../domain/quotes/infrastructure/quotesMongoRepo");
const router = express.Router();

router.post('/', async (req, res, next) => {
  const actionResult = await createQuote(req.body, new QuotesMongoRepo())

  return res.status(201).send(actionResult)
});

router.get('/', async (req, res, next) =>{
  const actionResult = await retrieveQuotes(new QuotesMongoRepo())

  return res.status(200).send(actionResult)
});


module.exports = router;
