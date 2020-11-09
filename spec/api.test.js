const request = require('supertest')
const app = require('../app')
const QuotesInMemoryRepo = require("../domain/quotes/infrastructure/quotesInMemoryRepo");

describe('POST /quotes', () => {
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


const deleteQuotes = () => {  QuotesInMemoryRepo.quotes = [] }
