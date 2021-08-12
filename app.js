const express = require('express');
const session = require('express-session');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const bcrypt = require('bcrypt');
const catchAsync = require('./utils/catchAsync');
const apiRoutes = require('./routes/index');


const app = express();

// the object each session receives
const sess = {
  secret: 'key that will sign cookie',
  cookie: { },
  // we do not want a nes session each browser visit
  resave: false,
//   don't save reoccurring visitors unless the session request is modified
  saveUninitialized: false,
  //store session info in database
  store: new SequelizeStore({
    db: sequelize
  })
};

// innitialized middleware
app.use(session(sess));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use('/', apiRoutes)


module.exports = app;