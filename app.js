const express = require('express')
const cors = require('cors')

const app = express()

app.set('trust proxy', 'loopback')
// cors
app.use(cors())

app.use(express.json())

const api = require('./src/api')

app.use(api)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app
