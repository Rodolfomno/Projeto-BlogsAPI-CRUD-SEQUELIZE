const { Categories } = require('../models');

const createNewCategory = async (name) => {
    const newCategory = await Categories.create({ name });

    return newCategory;
};

const getAllCategories = async () => {
    const AllCategories = await Categories.findAll();
    return AllCategories;
};

module.exports = {
    createNewCategory,
    getAllCategories,
};
