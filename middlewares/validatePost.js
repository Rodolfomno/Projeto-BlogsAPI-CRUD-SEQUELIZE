const postSchema = require('../schemas/postSchema');

module.exports = async (req, _res, next) => {
  try {
    const { body } = req;

    await postSchema.validateAsync(body);

    return next();
  } catch (error) {
    return next(error);
  }
};