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
      customer_name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      customer_document:{
        type: Sequelize.STRING,
        allowNull: false
      },
      contact_phone:{
        type: Sequelize.STRING,
        allowNull: false
      },
      contact_email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      user_id:{
        type: Sequelize.STRING,
        allowNull: false
      },
      status:{
        type: Sequelize.STRING,
        allowNull: false
      },
      description:{
        type: Sequelize.STRING,
        allowNull: false
      },
      conclusion:{
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
