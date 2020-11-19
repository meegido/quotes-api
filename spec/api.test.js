const request = require('supertest')
const mongoose = require('mongoose');
const app = require('../app')
const QuotesInMemoryRepo = require("../domain/quotes/infrastructure/quotesInMemoryRepo");
const QuoteModel = require("../domain/quotes/infrastructure/models")

describe('POST /quotes', () => {
    beforeEach(async () => {
        await QuoteModel.deleteMany({})
    })

    it('should create a new post', async () => {
        const response = await request(app)
          .post('/quotes')
          .send({
            sentence: 'This is a sentence',
          })
        expect(response.statusCode).toEqual(201)
        expect(response.body).toEqual({
            id: expect.anything(),
            sentence: 'This is a sentence'
        })
    })
})


describe('GET /quotes', () => {
    beforeEach(async () => {
        await mongoose.connection.db.dropDatabase()
    })

    it('should retrieve all quotes', async () => {
        await request(app)
            .post('/quotes')
            .send({
                sentence: 'This is a sentence',
            })

        const response = await request(app)
            .get('/quotes')
            .send()

        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual([{
            id: expect.anything(),
            sentence: 'This is a sentence'
        }])
    })
})
