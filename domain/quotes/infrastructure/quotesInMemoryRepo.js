class QuotesInMemoryRepo {
    static quotes = []

    retrieveAll = () => {
        return QuotesInMemoryRepo.quotes
    }

    createQuote = (quote) => {
        QuotesInMemoryRepo.quotes.push(quote)

        return quote
    }

    static deleteAll = () => {
        QuotesInMemoryRepo.quotes = []
    }
}

module.exports = QuotesInMemoryRepo
