/* eslint-disable no-console */
const http = require('http')
const express = require('express')
const cors = require('cors')
// const astrologer = require('./astrologer')

const app = express()
// cors
app.use(cors())

app.use(express.json())

app.get('/', async (req, res) => res.status(200).json({ message: 'Welcome to Astrology api!' }))

app.get('/example', async (req, res) => res.status(200).json({ message: 'Welcome to Example!' }))

app.get('/horoscope', async (req, res) => {
  const date = new Date(req.query.time)
  const { latitude, longitude, houseSystem } = req.query

  // const chart = astrologer.natalChart(date, latitude, longitude, houseSystem)

  res.status(200).json({
    data: "chart"
  })
})

const server = http.createServer(app)

server.listen(3001, () => {
  console.log('Server listening on port 3001');
});
