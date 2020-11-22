class QuotesInMemoryRepo {
    static quotes = []

    retrieveAll = () => {
        return QuotesInMemoryRepo.quotes
    }

    save = (quote) => {
        QuotesInMemoryRepo.quotes.push(quote)

        return quote
    }
}

module.exports = QuotesInMemoryRepo
