const updateSchema = require('../schemas/updateSchema');

module.exports = async (req, _res, next) => {
  try {
    const { body } = req;

    await updateSchema.validateAsync(body);

    return next();
  } catch (error) {
    return next(error);
  }
};