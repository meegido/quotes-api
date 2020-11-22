const mongoose = require('mongoose');
const QuotesMongoRepo = require('../../../domain/quotes/infrastructure/quotesMongoRepo');
const Quote = require("../../../domain/quotes/quote");
const QuoteModel = require("../../../domain/quotes/infrastructure/models");

describe('Quotes MongoDb Repository', () => {
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

    it('creates & saves quotes successfully', async () => {
        const repository = new QuotesMongoRepo()
        const quote = new Quote({sentence: 'This is a sentence'})

        const savedQuote = await repository.save(quote)

        expect(savedQuote.id).toBeDefined()
        expect(savedQuote.sentence).toBe('This is a sentence')
    });

    it('retrieves all quotes', async () => {
        const repository = new QuotesMongoRepo()
        const quote = new Quote({sentence: 'This is a sentence'})
        await repository.save(quote)

        const quotes = await repository.retrieveAll()

        expect(quotes).toEqual([{
            id: expect.anything(),
            sentence: 'This is a sentence'
        }])

    });
})
