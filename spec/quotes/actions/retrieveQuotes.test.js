const QuotesInMemoryRepo = require("../../../domain/quotes/infrastructure/quotesInMemoryRepo");
const retrieveQuotes = require("../../../domain/quotes/retrieveQuotes");

describe('Retrieve quotes', () => {
    it('retrieves all quotes', () => {
        const repo = new QuotesInMemoryRepo()
        repo.createQuote({sentence: 'This is a sentence'})

        const quotes = retrieveQuotes(repo)

        expect(quotes).toEqual([{sentence: 'This is a sentence'}])
    });
});
