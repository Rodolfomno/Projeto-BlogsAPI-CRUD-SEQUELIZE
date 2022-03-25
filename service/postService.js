const { BlogPosts } = require('../models');

const createNewPost = async (title, content, userId) => {
    const newPost = await 
        BlogPosts.create({ title, content, userId, published: new Date(), updated: new Date() });
  return newPost;
};

module.exports = {
  createNewPost,
};