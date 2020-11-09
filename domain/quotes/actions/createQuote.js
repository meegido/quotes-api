const createQuote = async(payload, repo) => {
    return await repo.save(payload)
}

module.exports = createQuote
