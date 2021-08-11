const express = require('express');
const catchAsync = require('./utils/catchAsync');
const apiRoutes = require('./routes/index');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use('/', apiRoutes)


module.exports = app;