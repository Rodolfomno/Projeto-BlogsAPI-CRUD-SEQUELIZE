const express = require('express');
const validateLogin = require('../middlewares/validateLogin');
const loginController = require('../controllers/loginController');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, loginController.checkLogin);

module.exports = loginRouter;