const { OtherServices } = require('../models')

const GetAllServices = async (req, res) => {
  try {
    const special = await OtherServices.findAll()
    res.send(special)
  } catch (error) {
    throw error
  }
}

const CreateService = async (req, res) => {
  try {
    const newservice = await OtherServices.create({ ...req.body })
    res.send(newservice)
  } catch (error) {
    throw error
  }
}

const DeleteService = async (req, res) => {
  try {
    OtherServices.destroy({ where: { id: req.params.special_id } })
    res.send({
      msg: 'Service has been deleted',
      payload: req.params.special_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const FindOneService = async (req, res) => {
  try {
    const oneservice = await OtherServices.findbyPk(req.params.man_id)
    res.send(oneservice)
  } catch (error) {
    throw error
  }
}

const UpdateService = async (req, res) => {
  try {
    const update = await OtherServices.update(
      { ...req.body },
      { where: { id: req.params.special_id }, returning: true }
    )
    res.send(update)
  } catch (error) {
    throw error
  }
}

module.exports = {
  UpdateService,
  FindOneService,
  CreateService,
  DeleteService,
  GetAllServices
}
