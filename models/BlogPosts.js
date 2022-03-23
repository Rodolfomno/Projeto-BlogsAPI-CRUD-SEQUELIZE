const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false, 
  },
  published: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const BlogPosts = sequelize.define(
    'BlogPosts',
    Attributes, 
    {
      tableName: 'BlogPosts',
      timestamps: false,
    },
  );

    BlogPosts.associate = (models) => {
      BlogPosts.belongsTo(models.Users, { 
        foreignKey: 'userId',
        as: 'user',
     });
    };

    return BlogPosts;
};