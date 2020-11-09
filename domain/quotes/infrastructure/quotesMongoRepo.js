const QuoteModel = require("./models")
const Quote = require("../../../spec/quotes/quote");

class QuotesMongoRepo {
    constructor() {
        this.model = QuoteModel
    }

    async save(quote) {
        const document = new this.model(quote)

        return document.save()
    }

    async retrieveAll() {
        const quotes =  await this.model.find({})

        return quotes.map((quote) => new Quote(quote.sentence))
    }
}

module.exports = QuotesMongoRepo
