const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const initDb = require('./db/init');


const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

initDb();

app.use('/', indexRouter);
app.use('/auth', authRouter);

app.listen(5000, () => console.log('Listening on port 5000!'));
