const createQuote = (payload, repo) => {
    return repo.save(payload)
}

module.exports = createQuote
