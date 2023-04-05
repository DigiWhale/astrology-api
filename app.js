const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const featurePolicy = require('feature-policy');

const app = express();

app.set('trust proxy', 'loopback');

if (process.env.ENVIRONMENT !== 'test') {
  // logger
  app.use(
    morgan(
      '[:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'
    )
  );
}

// helmet configurations
app.use(helmet());

app.use(helmet.referrerPolicy());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"]
    }
  })
);

app.use(
  featurePolicy({
    features: {
      fullscreen: ["'self'"],
      vibrate: ["'none'"],
      syncXhr: ["'none'"]
    }
  })
);

app.use(express.json());

// Define CORS settings for /horoscope endpoint only
const horoscopeCorsOptions = {
  origin: 'http://localhost:3000'
};

const api = require('./src/api');

// Apply CORS middleware only to /horoscope endpoint
app.use('/horoscope', cors(horoscopeCorsOptions), api);

module.exports = app;
