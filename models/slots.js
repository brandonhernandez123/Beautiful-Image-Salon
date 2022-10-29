'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class slots extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  slots.init(
    {
      available_date: DataTypes.DATE,
      available_time: DataTypes.TIME,
      booked: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'slots',
      tableName: 'slots'
    }
  )
  return slots
}
