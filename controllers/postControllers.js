const categoryService = require('../service/categoryService');
const postService = require('../service/postService');

const createNewPost = async (req, res, next) => {
    try {
        const { title, content, categoryIds } = req.body;
        const { id } = req.tokenData;

        console.log('========================', id);
        
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

module.exports = {
  createNewPost,
};