module.exports = (sequelize) => {
  const PostsCategories = sequelize.define('PostsCategories',
    {}, { timestamps: false, tableName: 'postsCategories' });

  PostsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, { 
      foreignKey: 'postId', 
      as: 'categories',
      through: PostsCategories,
      otherKey: 'categoryId',
    });

    models.Categories.belongsToMany(models.BlogPosts, { 
      foreignKey: 'categoryId', 
      as: 'blogPosts',
      through: PostsCategories,
      otherKey: 'postId',
    });
  };
  return PostsCategories;
};  