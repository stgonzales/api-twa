'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('tickets', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      customer_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      contact_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      issue_description:{
        type: Sequelize.STRING,
        allowNull: false
      },
      conclusion_description:{
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      ended_at:{
        type: Sequelize.DATE,
        allowNull: true
      }
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tickets');
  }
};
