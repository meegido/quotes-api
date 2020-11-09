const createQuote = require("../../../domain/quotes/actions/createQuote");
const QuotesMongoRepo = require("../../../domain/quotes/infrastructure/quotesMongoRepo");

describe('Create quote', () => {
    it('creates a quote ', async () => {
        const repo = new QuotesMongoRepo()
        const actionResult = await createQuote({sentence: 'This is a sentence'}, repo)

        expect(actionResult).toEqual({sentence: 'This is a sentence'})
    });
});
