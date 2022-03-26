const { BlogPosts, Users } = require('../models');
const categoryService = require('./categoryService');

const createNewPost = async (title, content, userId) => {
    const newPost = await 
        BlogPosts.create({ title, content, userId, published: new Date(), updated: new Date() });
  return newPost;
};

const getAllPosts = async () => {
  const halfPosts = await BlogPosts.findAll({
    include: [{ model: Users, as: 'user', attributes: { exclude: ['password'] } }],
  });
  const allCategories = await categoryService.getAllCategories();

  const allPosts = halfPosts
    .map((post) => Object.assign(post.dataValues, { categories: allCategories }));

  return allPosts;
};

const getPostById = async (id) => {
  const [postId] = await BlogPosts.findAll({
    include: [{ model: Users, as: 'user', attributes: { exclude: ['password'] } }],
    where: { id },
  });

  if (!postId) return null;
  
  const categoryIdById = await categoryService.getCategoryById(id);

  const postByIdWithCategory = Object.assign(postId.dataValues, { categories: categoryIdById });

  return postByIdWithCategory;
};

module.exports = {
  createNewPost,
  getAllPosts,
  getPostById,
};