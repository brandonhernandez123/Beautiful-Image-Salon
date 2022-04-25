const ColorController = require('../controllers/ColorControllers')
const Route = require('express').Router()

Route.get('/colorservices', ColorController.AllColorServices)
Route.post('/newcolorservice', ColorController.NewColorService)
Route.delete(
  '/deletecolorservice/:color_id',
  ColorController.DeleteColorService
)
Route.put('/updatecolorservice/:color_id', ColorController.UpdateService)
Route.get('colorservice/:color_id')

module.exports = Route
