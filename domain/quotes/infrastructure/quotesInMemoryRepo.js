class QuotesInMemoryRepo {
    quotes = []

    retrieveAll = () => {
        return this.quotes
    }

    save = (quote) => {
        this.quotes.push(quote)

        return quote
    }
}

module.exports = QuotesInMemoryRepo
