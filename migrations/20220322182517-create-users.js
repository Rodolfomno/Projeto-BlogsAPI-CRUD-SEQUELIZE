'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      displayName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull:false
      },
      password: {
        type: Sequelize.STRING ,
        allowNull:false
      },
      image: {
        type: Sequelize.STRING, 
        allowNull:true
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  }
};
