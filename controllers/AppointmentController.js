const { Appointments } = require('../models')

const findAllApppointments = async (req, res) => {
  try {
    const allAppointments = await Appointments.findAll()
    res.send(allAppointments)
  } catch (error) {
    throw error
  }
}

const findOneAppointment = async (req, res) => {
  try {
    const findOne = await Appointments.findByPk(req.params.appointment_id)
    res.send(findOne)
  } catch (error) {
    throw error
  }
}

const createAppointment = async (req, res) => {
  try {
    const newAppointment = await Appointments.create({ ...req.body })
    res.send(newAppointment)
  } catch (error) {
    throw error
  }
}

const updateAppointment = async (req, res) => {
  try {
    const update = await Appointments.update(
      { ...req.body },
      { where: { id: req.params.appointment_id }, returning: true }
    )
    res.send(update)
  } catch (error) {
    throw error
  }
}

const deleteAppointment = async (req, res) => {
  try {
    Appointments.destroy({ where: { id: req.params.appointment_id } })
    res.send({
      msg: 'Appointment has been deleted',
      payload: req.params.appointment_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  findAllApppointments,
  findOneAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment
}
