const { Categories } = require('../models');

const createNewCategory = async (name) => {
    const newCategory = await Categories.create({ name });

    return newCategory;
};

const getAllCategories = async () => {
    const AllCategories = await Categories.findAll();
    return AllCategories;
};

const getCategoryById = async (id) => {
    const categoryById = await Categories.findAll({ where: { id } });
    return categoryById;
};

module.exports = {
    createNewCategory,
    getAllCategories,
    getCategoryById,
};
