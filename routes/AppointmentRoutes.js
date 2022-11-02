const AppointmentController = require('../controllers/AppointmentController')
const Route = require('express').Router()

Route.get('/appointments', AppointmentController.findAllApppointments)
Route.get(
  '/appointments/:appointment_id',
  AppointmentController.findOneAppointment
)
Route.post('/appointments', AppointmentController.createAppointment)
Route.put(
  '/appointments/:appointment_id',
  AppointmentController.updateAppointment
)
Route.delete(
  '/appointments/:appointment_id',
  AppointmentController.deleteAppointment
)

module.exports = Route
