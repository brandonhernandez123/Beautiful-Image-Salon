const { Router } = require('express')
const MenServicesController = require('../controllers/MenServicesController')
const menservices = require('../models/menservices')
const Route = require('express').Router()

Route.get('/menservices', MenServicesController.GetAllMenServices)
Route.post('/newmenservice', MenServicesController.CreateMenService)
Route.delete(
  '/deletemenservice/:man_id',
  MenServicesController.DeleteMenService
)
Route.put('/updatemenservice/:man_id', MenServicesController.UpdateService)
Route.get('/menservices/:man_id', MenServicesController.FindOneService)

module.exports = Route
