const { ColorAndHighlights } = require('../models')

const AllColorServices = async (req, res) => {
  try {
    const allservices = await ColorAndHighlights.findAll()
    res.send(allservices)
  } catch (error) {
    throw error
  }
}

const OneColorService = async (req, res) => {
  try {
    const singleservice = await ColorAndHighlights.findbyPk({
      where: { id: req.params.color_id }
    })
    res.send(singleservice)
  } catch (error) {
    throw error
  }
}

const NewColorService = async (req, res) => {
  try {
    const newservice = await ColorAndHighlights.create({ ...req.body })
    res.send(newservice)
  } catch (error) {
    throw error
  }
}

const DeleteColorService = async (req, res) => {
  try {
    ColorAndHighlights.destroy({ where: { id: req.params.color_id } })
    res.send({
      msg: 'Service has been deleted',
      payload: req.params.color_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const UpdateService = async (req, res) => {
  try {
    const update = await ColorAndHighlights.update(
      { ...req.body },
      { where: { id: req.params.color_id }, returning: true }
    )
    res.send(update)
  } catch (error) {
    throw error
  }
}

module.exports = {
  AllColorServices,
  UpdateService,
  NewColorService,
  DeleteColorService,
  OneColorService
}
