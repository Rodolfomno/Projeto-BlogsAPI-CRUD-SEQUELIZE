const { Categories } = require('../models');

const createNewCategory = async (name) => {
    const newCategory = await Categories.create({ name });

    return newCategory;
};

module.exports = {
    createNewCategory,
};
