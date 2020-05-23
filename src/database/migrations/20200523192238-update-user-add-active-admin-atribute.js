'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'admin',
        {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        }
      ),
      queryInterface.addColumn(
        'users',
        'active',
        {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    
    return Promise.all([
      queryInterface.removeColumn('users', 'admin'),
      queryInterface.removeColumn('users', 'active')
    ]);
  }
};
