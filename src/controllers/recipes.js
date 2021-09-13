const { StatusCodes } = require('http-status-codes');
const servicesRecipes = require('../services/recipes');

const createRecipe = async (req, res) => {
    const result = await servicesRecipes.createRecipe(req.body);
    return res.status(StatusCodes.OK).json(result);
};

module.exports = {
    createRecipe,
};
