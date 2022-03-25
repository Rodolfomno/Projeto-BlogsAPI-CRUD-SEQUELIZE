const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth.middleware');
const validateUser = require('../middlewares/validateUser');

const userRouter = express.Router();

userRouter.get('/', authMiddleware, userController.getAllUsers);

userRouter.post('/', validateUser, userController.createNewUser);

userRouter.get('/:id', authMiddleware, userController.getUserById);

module.exports = userRouter;