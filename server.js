const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST)

const WomanServiceRoutes = require('./routes/WomanServicesRoutes')
const MenServiceRoutes = require('./routes/MenServicesRoutes')
const ColorServiceRoutes = require('./routes/ColorRoutes')
const SpecialEventRoutes = require('./routes/SpecialServiceRoutes')
const OtherServicesRoutes = require('./routes/OtherServicesRoutes')
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use(
  '/api',
  WomanServiceRoutes,
  MenServiceRoutes,
  ColorServiceRoutes,
  SpecialEventRoutes,
  OtherServicesRoutes
)

app.post('/stripe/charge', cors(), async (req, res) => {
  console.log('stripe-routes.js 9 | route reached', req.body)
  let { amount, id, receipt_email, billing_details } = req.body
  console.log('stripe-routes.js 10 | amount and id', amount, id)
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'USD',
      description: 'Beautiful Image Salon',
      payment_method: id,
      confirm: true,
      receipt_email: receipt_email,
      billing_details: billing_details
    })
    console.log('stripe-routes.js 19 | payment', payment)
    res.json({
      message: 'Payment Successful',
      success: true
    })
  } catch (error) {
    console.log('stripe-routes.js 17 | error', error)
    res.json({
      message: 'Payment Failed',
      success: false
    })
  }
})
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
