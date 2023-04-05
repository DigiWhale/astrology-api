const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const featurePolicy = require('feature-policy');

const app = express();

app.set('trust proxy', 'loopback');

// cors
app.use(cors());

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

// CORS settings
const allowedOrigins = ['http://localhost:3001', 'https://example.com'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

const api = require('./src/api');

app.use(api);

module.exports = app;
