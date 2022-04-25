const SpecialEventController = require('../controllers/SpecialEventController')
const Router = require('express').Router()

Router.get('/specialservices', SpecialEventController.GetAllServices)
Router.get('/specialservice/:special_id', SpecialEventController.FindOneService)
Router.post('/newspecialservice', SpecialEventController.CreateService)
Router.delete(
  '/deletespecialservice/:special_id',
  SpecialEventController.DeleteService
)
Router.put(
  '/updatespecialservice/:special_id',
  SpecialEventController.UpdateService
)

module.exports = Router
