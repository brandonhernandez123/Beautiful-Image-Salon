const SlotController = require('../controllers/SlotController')
const Route = require('express').Router()

Route.get('/slots', SlotController.findAllSlots)
Route.get('/slots/:slot_id', SlotController.findSlotByPk)
Route.post('/slots', SlotController.newSlot)
Route.put('/slots/:slot_id', SlotController.updateSlot)
Route.delete('/slots/:slot_id', SlotController.deleteSlot)

module.exports = Route
