const loginSchema = require('../schemas/loginSchema');

module.exports = async (req, _res, next) => {
  try {
    const { body } = req;

    await loginSchema.validateAsync(body);

    return next();
  } catch (error) {
    return next(error);
  }
};