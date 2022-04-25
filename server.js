const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
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
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
