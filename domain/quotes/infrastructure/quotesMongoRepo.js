const QuoteModel = require("./models")
const Quote = require("../quote");

class QuotesMongoRepo {
    constructor() {
        this.model = QuoteModel
    }

    async save(quote) {
        const document = new this.model(quote)
        await document.save({sentence: quote.sentence})

        return new Quote(document._id, document.sentence)
    }

    async retrieveAll() {
        const quotes =  await this.model.find({})

        return quotes.map((quote) => new Quote(quote._id, quote.sentence))
    }
}

module.exports = QuotesMongoRepo
