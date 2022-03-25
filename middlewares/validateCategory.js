const categorySchema = require('../schemas/categorySchema');

module.exports = async (req, _res, next) => {
  try {
    const { body } = req;

    await categorySchema.validateAsync(body);

    return next();
  } catch (error) {
    return next(error);
  }
};