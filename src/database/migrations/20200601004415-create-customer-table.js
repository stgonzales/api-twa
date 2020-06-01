'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customers', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      document_number:{
        type: Sequelize.STRING,
        allowNull: false
      },
      default_phone:{
        type: Sequelize.STRING,
        allowNull: true
      },
      default_email:{
        type: Sequelize.STRING,
        allowNull: true
      },
      priority_group_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('customers');
  }
};
