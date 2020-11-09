class QuotesMongoRepo {
    constructor(model) {
        this.model = model
    }

    async save(quote) {
        const document = new this.model(quote)

        return document.save()
    }
}

module.exports = QuotesMongoRepo
