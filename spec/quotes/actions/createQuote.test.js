const createQuote = require("../../../domain/quotes/actions/createQuote");
const QuotesInMemoryRepo = require("../../../domain/quotes/infrastructure/quotesInMemoryRepo");

describe('Create quote', () => {
    it('creates a quote ', async () => {
        const repo = new QuotesInMemoryRepo()
        const quote = {sentence: 'This is a sentence'};

        const actionResult = await createQuote(quote, repo)

        const createdQuotes = repo.retrieveAll()
        expect(actionResult).toEqual({'sentence': 'This is a sentence'})
        expect(createdQuotes.length).toEqual(1)
    });
});
