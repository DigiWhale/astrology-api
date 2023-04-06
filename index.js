const express = require('express')
const cors = require('cors')

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
  const date = new Date(req.query.time)
  const { latitude, longitude, houseSystem } = req.query

  res.status(200).json({
    data: "chart"
  })
})

const port = process.env.PORT || 3001

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
