const express = require('express');
// const validateUser = require('../middlewares/validateUser'); 
const userController = require('../controllers/userController');
const validateUser = require('../middlewares/validateUser');

const userRouter = express.Router();

userRouter.post('/', validateUser, userController.createNewUser);

module.exports = userRouter;