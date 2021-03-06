const categoryService = require('../service/categoryService');

const createNewCategory = async (req, res, next) => {
    try {
        const { name } = req.body;

        const newCategory = await categoryService.createNewCategory(name);

        return res.status(201).json(newCategory);
    } catch (error) {
        return next(error);
    }
};

const getAllCategories = async (req, res, next) => {
    try {
        const AllCategories = await categoryService.getAllCategories();
        return res.json(AllCategories);
    } catch (error) {
        return next(error);
    }
};

module.exports = {
  createNewCategory,
  getAllCategories,
};