const express = require('express');
const app = express();
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const session = require('express-session')
const passport = require('passport');
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('../db').connection;
const sessionStore = new SequelizeStore({db})

//move these methods. temporary spot.
passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) =>
  db.models.user.findById(id)
    .then(user => done(null, user))
    .catch(done))

//logging middleware
app.use(volleyball);

app.use(session({
  secret: process.env.SESSION_SECRET || 'this is a default secret',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// auth and api routes
const apiRoutes = require('./api');

app.use('/api', apiRoutes);
app.use('/auth', require('./auth'))



//static middleware
app.use(express.static(path.join(__dirname, '../public')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;