const express = require('express');
const postControllers = require('../controllers/postControllers');
const authMiddleware = require('../middlewares/auth.middleware');
const validatePost = require('../middlewares/validatePost');
const validateUpdate = require('../middlewares/validateUpdate');

const postRouter = express.Router();

postRouter.get('/', authMiddleware, postControllers.getAllPosts);

postRouter.get('/:id', authMiddleware, postControllers.getPostById);

postRouter.post('/', authMiddleware, validatePost, postControllers.createNewPost);

postRouter.put('/:id', authMiddleware, validateUpdate, postControllers.updatePost);

postRouter.delete('/:id', authMiddleware, postControllers.deleteById);

module.exports = postRouter;