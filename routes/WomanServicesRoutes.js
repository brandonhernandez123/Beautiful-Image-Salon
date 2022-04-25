const WomanServicesController = require('../controllers/WomanServicesController')
const Router = require('express').Router()

Router.get('/womanservices', WomanServicesController.GetAllWomanServices)

Router.post('/newwomanservice', WomanServicesController.NewWomanService)

Router.delete(
  '/deletewmservice/:woman_id',
  WomanServicesController.DeleteWomanService
)

Router.put(
  '/updatewomanservice/:woman_id',
  WomanServicesController.UpdateWomanService
)

Router.get(
  '/singlewomanservice/:woman_id',
  WomanServicesController.SingleWomanService
)

module.exports = Router
