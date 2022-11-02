'use strict'
const { STRING } = require('sequelize')
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Appointments.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      service: DataTypes.STRING,
      price: DataTypes.INTEGER,
      appointment_date: DataTypes.DATE,
      appointment_time: DataTypes.TIME
    },
    {
      sequelize,
      modelName: 'Appointments',
      tableName: 'appointments'
    }
  )
  return Appointments
}
