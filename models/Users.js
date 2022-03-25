const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  displayName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
    const Users = sequelize.define(
      'Users',
      Attributes, 
      {
        timestamps: false,
        tableName: 'Users',
      },
    );
  
    Users.associate = (models) => {
      Users.hasMany(models.BlogPosts, {
        foreignKey: 'userId',
        as: 'User',
        });
    };
    return Users;
};