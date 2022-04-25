const { MenServices } = require('../models')
const GetAllMenServices = async (req, res) => {
  try {
    const menservices = await MenServices.findAll()
    res.send(menservices)
  } catch (error) {
    throw error
  }
}

const CreateMenService = async (req, res) => {
  try {
    const newservice = await MenServices.create({ ...req.body })
    res.send(newservice)
  } catch (error) {
    throw error
  }
}

const DeleteMenService = async (req, res) => {
  try {
    MenServices.destroy({ where: { id: req.params.man_id } })
    res.send({
      msg: 'Service has been deleted',
      payload: req.params.man_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const FindOneService = async (req, res) => {
  try {
    const oneservice = await MenServices.findbyPk(req.params.man_id)
    res.send(oneservice)
  } catch (error) {
    throw error
  }
}

const UpdateService = async (req, res) => {
  try {
    const update = await MenServices.update(
      { ...req.body },
      { where: { id: req.params.man_id }, returning: true }
    )
    res.send(update)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllMenServices,
  CreateMenService,
  DeleteMenService,
  FindOneService,
  UpdateService
}
