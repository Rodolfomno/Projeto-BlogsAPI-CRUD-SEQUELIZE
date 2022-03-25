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

module.exports = { createNewUser };