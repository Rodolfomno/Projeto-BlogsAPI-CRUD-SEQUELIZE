const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const Categories = sequelize.define(
    'Categories',
    Attributes, 
    {
      timestamps: false,
      tableName: 'categories',
    },
  );

  return Categories;
};