'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  appointment.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      service: DataTypes.STRING,
      price: DataTypes.INTEGER,
      appointment_date: DataTypes.DATE,
      appointment_time: DataTypes.TIME
    },
    {
      sequelize,
      modelName: 'appointment',
      tableName: 'appointment'
    }
  )
  return appointment
}
