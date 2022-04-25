const { WomanServices } = require('../models')

const GetAllWomanServices = async (req, res) => {
  try {
    const womanservices = await WomanServices.findAll()
    res.send(womanservices)
  } catch (error) {
    throw error
  }
}

const NewWomanService = async (req, res) => {
  try {
    const newwmservice = await WomanServices.create({ ...req.body })
    res.send(newwmservice)
  } catch (error) {
    throw error
  }
}

const SingleWomanService = async (req, res) => {
  try {
    const singlewomanservice = await WomanServices.findbyPk(req.params.woman_id)
    res.send(singlewomanservice)
  } catch (error) {
    throw error
  }
}

const DeleteWomanService = async (req, res) => {
  try {
    await WomanServices.destroy({ where: { id: req.params.woman_id } })
    res.send({
      msg: 'Service has been deleted',
      payload: req.params.woman_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const UpdateWomanService = async (req, res) => {
  try {
    const updatedwmservice = await WomanServices.Update(
      { ...req.body },
      { where: { id: req.params.woman_id }, returning: true }
    )
    res.send(updatedwmservice)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllWomanServices,
  NewWomanService,
  SingleWomanService,
  DeleteWomanService,
  UpdateWomanService
}
