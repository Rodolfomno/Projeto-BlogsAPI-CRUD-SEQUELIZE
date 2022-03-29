const Joi = require('joi');

const updateSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.forbidden().messages({ 'any.unknown': 'Categories cannot be edited' }),
});

module.exports = updateSchema;