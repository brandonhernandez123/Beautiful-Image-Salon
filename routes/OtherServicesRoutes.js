const OtherServicesController = require('../controllers/OtherServicesController')
const Router = require('express').Router()

Router.get('/otherservices', OtherServicesController.GetAllServices)
Router.get('/otherservice/:special_id', OtherServicesController.FindOneService)
Router.post('/newotherservice', OtherServicesController.CreateService)
Router.delete(
  '/deleteotherservice/:special_id',
  OtherServicesController.DeleteService
)
Router.put(
  '/updateotherservice/:special_id',
  OtherServicesController.UpdateService
)

module.exports = Router
