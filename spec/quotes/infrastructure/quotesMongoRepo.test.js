const mongoose = require('mongoose');
const QuotesMongoRepo = require('../../../domain/quotes/infrastructure/quotesMongoRepo');
const Quote = require("../../../domain/quotes/infrastructure/models");

describe('Quotes MongoDb Repository', () => {

    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('creates & saves quotes successfully', async () => {
        const quote = new QuotesMongoRepo(Quote)
        const savedQuote = await quote.save({sentence: 'La frasecica'})

        expect(savedQuote._id).toBeDefined()
        expect(savedQuote.sentence).toBe('La frasecica')
    });
})
