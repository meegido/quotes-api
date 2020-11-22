const QuoteModel = require("./models")
const Quote = require("../quote");

class QuotesMongoRepo {
    constructor() {
        this.model = QuoteModel
    }

    async save(quote) {
        const document = new this.model(quote)
        await document.save({sentence: quote.sentence})

        return new Quote({id: document._id, sentence: document.sentence})
    }

    async retrieveAll() {
        const quotes =  await this.model.find({})

        return quotes.map((quote) => new Quote({id: quote._id, sentence: quote.sentence}))
    }
}

module.exports = QuotesMongoRepo
