const QuotesInMemoryRepo =  require("../../../domain/quotes/infrastructure/quotesInMemoryRepo")
const createQuote = require("../../../domain/quotes/actions/createQuote");

describe('Create quote', () => {
    it('creates a quote ', () => {
        const repo = new QuotesInMemoryRepo()
        const actionResult = createQuote({sentence: 'This is a sentence'}, repo)

        expect(actionResult).toEqual({sentence: 'This is a sentence'})
    });
});
