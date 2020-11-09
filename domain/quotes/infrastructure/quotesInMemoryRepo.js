class QuotesInMemoryRepo {
    static quotes = []

    retrieveAll = () => {
        return QuotesInMemoryRepo.quotes
    }

    save = (quote) => {
        QuotesInMemoryRepo.quotes.push(quote)

        return quote
    }

    static deleteAll = () => {
        QuotesInMemoryRepo.quotes = []
    }
}

module.exports = QuotesInMemoryRepo
