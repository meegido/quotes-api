const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const quotesRouter = require('./routes/quotes');

const app = express();

const whitelist = [
    'http://localhost:3000',
];

const corsOptions = {
    origin: function(origin, callback){
        let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(new Error('Not allowed by CORS'), originIsWhitelisted);
    },
    credentials: true
};

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/quotes', quotesRouter);

module.exports = app;
