const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    sentence: { type: String, required: true},
});

const QuoteModel = mongoose.model('Quotes', QuoteSchema);

module.exports = QuoteModel
