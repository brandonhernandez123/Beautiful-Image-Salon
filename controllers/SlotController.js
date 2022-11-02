const { Slots } = require('../models')

const findAllSlots = async (req, res) => {
  try {
    const allSlots = await Slots.findAll()
    res.send(allSlots)
  } catch (error) {
    throw error
  }
}

const findSlotByPk = async (req, res) => {
  try {
    const oneSlot = Slots.findByPk(req.params.slot_id)
    res.send(oneSlot)
  } catch (error) {
    console.log('Slot does not exist')
    throw error
  }
}

const newSlot = async (req, res) => {
  try {
    const createSlot = await Slots.create({ ...req.body })
    res.send(createSlot)
  } catch (error) {
    throw error
  }
}

const updateSlot = async (req, res) => {
  try {
    const slotToUpdate = await Slots.update(
      { ...req.body },
      { where: { id: req.params.slot_id }, returning: true }
    )
    res.send(slotToUpdate)
  } catch (error) {
    throw error
  }
}

const deleteSlot = async (req, res) => {
  try {
    Slots.destroy({
      where: { id: req.params.slot_id }
    })
    res.send({
      msg: 'Slot has been deleted',
      payload: req.params.slot_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  findAllSlots,
  findSlotByPk,
  newSlot,
  updateSlot,
  deleteSlot
}
