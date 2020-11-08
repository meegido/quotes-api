const express = require('express');
const createQuote = require("../domain/quotes/createQuote");
const QuotesInMemoryRepo = require("../domain/quotes/infrastructure/quotesInMemoryRepo");
const retrieveQuotes = require("../domain/quotes/retrieveQuotes");
const router = express.Router();

router.post('/', function(req, res, next) {
  const actionResult = createQuote(req.body, new QuotesInMemoryRepo())

  return res.status(201).send(actionResult)
});

router.get('/', function(req, res, next) {
  const actionResult = retrieveQuotes(new QuotesInMemoryRepo())

  return res.status(200).send(actionResult)
});


module.exports = router;
