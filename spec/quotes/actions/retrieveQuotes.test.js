const mongoose = require('mongoose');
const retrieveQuotes = require("../../../domain/quotes/actions/retrieveQuotes");
const QuotesMongoRepo = require("../../../domain/quotes/infrastructure/quotesMongoRepo");
const Quote = require("../../../domain/quotes/quote");
const QuoteModel = require("../../../domain/quotes/infrastructure/models")

describe('Retrieve quotes', () => {
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    beforeEach(async () => {
        await QuoteModel.deleteMany({})
    })

    it('retrieves all quotes', async () => {
        const repo = new QuotesMongoRepo()
        const quote = new Quote('This is a sentence')
        await repo.save(quote)

        const quotes = await retrieveQuotes(repo)

        expect(quotes).toEqual([quote])
    });
});
