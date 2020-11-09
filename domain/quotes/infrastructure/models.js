const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    sentence: { type: String, required: true},
});

const Quote = mongoose.model('Quotes', QuoteSchema);

module.exports = Quote
