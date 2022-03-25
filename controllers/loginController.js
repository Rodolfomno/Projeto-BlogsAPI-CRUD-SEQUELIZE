const loginService = require('../service/loginService');
const jwtGenerator = require('../util/jwtGenerator');

const checkLogin = async (req, res, next) => {
    try {
        const { email } = req.body;

        const userExists = await loginService.searchByEmail(email);
        console.log(userExists);
        if (!userExists) return res.status(400).json({ message: 'Invalid fields' });

        const token = jwtGenerator({ id: userExists.dataValues.id });

        return res.status(200).json({ token });
    } catch (error) {
        return next(error);
    }
};

module.exports = {
  checkLogin,
};