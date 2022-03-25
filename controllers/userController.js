const userService = require('../service/userService');
const jwtGenerator = require('../util/jwtGenerator');

const createNewUser = async (req, res, next) => {
    try {
        const { displayName, email, password, image } = req.body;

        const userExists = await userService.searchByDisplayName(displayName);

        if (userExists) return res.status(409).json({ message: 'User already registered' });
        
        const newUser = await userService.createNewUser(displayName, email, password, image);

        const token = jwtGenerator({ id: newUser.dataValues.id, displayName });
        
        return res.status(201).json({ token });
    } catch (error) {
        return next(error);
    }
};

const getAllUsers = async (_req, res, next) => {
    try {
        const allUsers = await userService.getAllUsers();
        return res.json(allUsers);
    } catch (error) {
        return next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const userId = await userService.getUserById(id);

        if (!userId) return res.status(404).json({ message: 'User does not exist' });

        return res.status(200).json(userId);
    } catch (error) {
        return next(error);
    }
};

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
};