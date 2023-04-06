const express = require('express')
const cors = require('cors')
const astrologer = require('./astrologer')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Astrology api!' })
})

app.get('/example', (req, res) => {
  res.status(200).json({ message: 'Welcome to Example!' })
})

app.get('/horoscope', (req, res) => {
  const date = req.query.time ? new Date(req.query.time) : new Date()
  const latitude = req.query.latitude ? req.query.latitude : 0
  const longitude = req.query.longitude ? req.query.longitude : 0
  const houseSystem = req.query.houseSystem ? req.query.houseSystem : 'P'

  const chart = astrologer.natalChart(date, latitude, longitude, houseSystem)

  res.status(200).json({
    data: chart
  })
})


const port = process.env.PORT || 3001

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
