const { BlogPosts, Users } = require('../models');
const categoryService = require('./categoryService');

const createNewPost = async (title, content, userId) => {
    const newPost = await 
        BlogPosts.create({ title, content, userId, published: new Date(), updated: new Date() });
  return newPost;
};

const getAllPosts = async () => {
  console.log('===========PASSOUAQUI======================');
  const halfPosts = await BlogPosts.findAll({
    include: [{ model: Users, as: 'user', attributes: { exclude: ['password'] } }],
  });
  const allCategories = await categoryService.getAllCategories();

  const allPosts = halfPosts
    .map((post) => Object.assign(post.dataValues, { categories: allCategories }));

  console.log('==================', allPosts);

  return allPosts;
};

module.exports = {
  createNewPost,
  getAllPosts,
};