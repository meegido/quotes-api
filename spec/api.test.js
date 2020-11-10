const request = require('supertest')
const mongoose = require('mongoose');
const app = require('../app')
const QuotesInMemoryRepo = require("../domain/quotes/infrastructure/quotesInMemoryRepo");
const QuoteModel = require("../domain/quotes/infrastructure/models")

describe('POST /quotes', () => {
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

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
            sentence: 'This is a sentence'
        })
    })
})


describe('GET /quotes', () => {
  beforeEach(() => {
    QuotesInMemoryRepo.deleteAll();
  });


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
        sentence: 'This is a sentence'
    }])
  })
})
