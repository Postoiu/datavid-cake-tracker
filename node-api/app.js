const express = require('express');
const logger = require('morgan');
const initDb = require('./db/init');


const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

initDb();

app.use('/', indexRouter);

app.listen(5000, () => console.log('Listening on port 5000!'));
