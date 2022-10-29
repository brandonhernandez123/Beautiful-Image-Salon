'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('slots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      available_date: {
        type: Sequelize.DATE
      },
      available_time: {
        type: Sequelize.TIME
      },
      booked: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('slots');
  }
};