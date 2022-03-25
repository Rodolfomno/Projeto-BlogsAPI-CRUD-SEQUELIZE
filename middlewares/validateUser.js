const userSchema = require('../schemas/userSchema');

module.exports = async (req, _res, next) => {
  try {
    const { body } = req;

    await userSchema.validateAsync(body);

    return next();
  } catch (error) {
    return next(error);
  }
};