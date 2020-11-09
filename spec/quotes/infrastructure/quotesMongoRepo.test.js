const mongoose = require('mongoose');
const QuotesMongoRepo = require('../../../domain/quotes/infrastructure/quotesMongoRepo');
const Quote = require("../quote");
const QuoteModel = require("../../../domain/quotes/infrastructure/models");

describe('Quotes MongoDb Repository', () => {
    let connection
    let db

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
        const quoteRepo = new QuotesMongoRepo()
        const quote = new Quote('La frasecica')

        const savedQuote = await quoteRepo.save(quote)

        expect(savedQuote._id).toBeDefined()
        expect(savedQuote.sentence).toBe('La frasecica')
    });

    it('retrieves all quotes', async () => {
        const quoteRepo = new QuotesMongoRepo()
        const quote = new Quote('La frasecica')
        await quoteRepo.save(quote)

        const quotes = await quoteRepo.retrieveAll()

        expect(quotes).toEqual([quote])
    });
})
