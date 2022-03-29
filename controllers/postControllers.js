const categoryService = require('../service/categoryService');
const postService = require('../service/postService');

const createNewPost = async (req, res, next) => {
    try {
        const { title, content, categoryIds } = req.body;
        const { id } = req.tokenData;
        
        const foundCategoryId = await categoryService.getCategoryById(categoryIds);

        if (foundCategoryId.length !== categoryIds.length) {
            return res.status(400).json({ message: '"categoryIds" not found' });
        }

        const newPost = await postService.createNewPost(title, content, id);

        return res.status(201).json(newPost);
    } catch (error) {
        return next(error);
    }
};

const getAllPosts = async (_req, res, next) => {
    try {
        const allPosts = await postService.getAllPosts();
        return res.status(200).json(allPosts);
    } catch (error) {
        return next(error);
    }
};

const getPostById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const postById = await postService.getPostById(id);

        if (!postById) return res.status(404).json({ message: 'Post does not exist' });

        return res.status(200).json(postById);
    } catch (error) {
        return next(error);
    }
};

const updatePost = async (req, res, next) => {
    try {
        const { title, content } = req.body;
        const { id } = req.params;
        const userId = req.tokenData.id;
        const updatedPost = await postService.updatePost(title, content, id);

        if (!updatedPost) return res.status(404).json({ message: 'Post does not exist' });

        if (updatedPost
            .userId !== userId) return res.status(401).json({ message: 'Unauthorized user' });

        return res.status(200).json(updatedPost);
    } catch (error) {
        return next(error);
    }
};

module.exports = {
  createNewPost,
  getAllPosts,
  getPostById,
  updatePost,
};