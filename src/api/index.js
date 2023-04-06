const Router = require('express-promise-router')
const astrologer = require('../astrologer')
const cors = require('cors')

const router = new Router()

router.use(cors({
  origin: ['http://localhost:3000', 'https://example.com', 'https://themythicalfairy.com', 'http://www.themythicalfairy.com']
}))

router.get('/', async (req, res) => res.status(200).json({ message: 'Welcome to Astrology api!' }))

router.get('/horoscope', async (req, res) => {
  const date = new Date(req.query.time)
  const { latitude, longitude, houseSystem } = req.query

  const chart = astrologer.natalChart(date, latitude, longitude, houseSystem)

  res.status(200).json({
    data: chart
  })
})

router.get('/example', async (req, res) => {
  res.status(200).json({ message: 'This is an example route' })
})

router.get('*', async (req, res) => res.status(404).json({ message: 'Not found' }))


module.exports = router
