const express = require('express');
const postControllers = require('../controllers/postControllers');
const authMiddleware = require('../middlewares/auth.middleware');
const validatePost = require('../middlewares/validatePost');

const postRouter = express.Router();

postRouter.get('/', authMiddleware, postControllers.getAllPosts);

postRouter.get('/:id', authMiddleware, postControllers.getPostById);

postRouter.post('/', authMiddleware, validatePost, postControllers.createNewPost);

module.exports = postRouter;