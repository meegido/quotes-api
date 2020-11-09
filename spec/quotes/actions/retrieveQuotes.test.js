const retrieveQuotes = require("../../../domain/quotes/actions/retrieveQuotes");
const QuotesMongoRepo = require("../../../domain/quotes/infrastructure/quotesMongoRepo");
const Quote = require("../quote");

describe('Retrieve quotes', () => {
    it('retrieves all quotes', async () => {
        const repo = new QuotesMongoRepo()
        const quote = new Quote('This is a sentence')
        await repo.save(quote)

        const quotes = await retrieveQuotes(repo)

        expect(quotes).toEqual([quote])
    });
});
