const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const categoryController = require('../controllers/categoryControllers');
const validateCategory = require('../middlewares/validateCategory');

const categoryRouter = express.Router();

categoryRouter.get('/', authMiddleware, categoryController.getAllCategories);

categoryRouter.post('/', authMiddleware, validateCategory, categoryController.createNewCategory);

module.exports = categoryRouter;