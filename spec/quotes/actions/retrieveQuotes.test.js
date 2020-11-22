const retrieveQuotes = require("../../../domain/quotes/actions/retrieveQuotes");
const Quote = require("../../../domain/quotes/quote");
const QuotesInMemoryRepo = require("../../../domain/quotes/infrastructure/quotesInMemoryRepo");

describe('Retrieve quotes', () => {
    it('retrieves all quotes', async () => {
        const repo = new QuotesInMemoryRepo()
        const quote = new Quote('This is a sentence')
        repo.save(quote)

        const quotes = await retrieveQuotes(repo)

        expect(quotes).toEqual([quote])
    });
});
