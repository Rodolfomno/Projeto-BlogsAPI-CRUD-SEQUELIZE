'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("BlogPosts", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING, 
        allowNull:false
      },
      content: {
        type: Sequelize.STRING,      
        allowNull:false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: "Users",
          key: "id"
        }      
      },
      published: {
        allowNull:false,
        type: Sequelize.DATE      
      },
      updated: {
        allowNull:true,
        type: Sequelize.DATE      
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("BlogPosts");
  }
};
