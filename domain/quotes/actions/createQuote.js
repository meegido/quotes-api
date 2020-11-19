const createQuote = async(quote, repo) => {
    return await repo.save(quote)
}

module.exports = createQuote
