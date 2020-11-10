const mongoose = require('mongoose');
const createQuote = require("../../../domain/quotes/actions/createQuote");
const QuotesMongoRepo = require("../../../domain/quotes/infrastructure/quotesMongoRepo");
const QuoteModel = require("../../../domain/quotes/infrastructure/models");

describe('Create quote', () => {
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

    it('creates a quote ', async () => {
        const repo = new QuotesMongoRepo()
        const actionResult = await createQuote({sentence: 'This is a sentence'}, repo)

        expect(actionResult).toEqual({sentence: 'This is a sentence'})
    });
});
