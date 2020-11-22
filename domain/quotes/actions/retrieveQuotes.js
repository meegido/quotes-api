const retrieveQuotes = async (repo) => {
    const quotes = await repo.retrieveAll()

    return quotes
}

module.exports = retrieveQuotes
