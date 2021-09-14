const { StatusCodes } = require('http-status-codes');
const servicesRecipes = require('../services/recipes');

const createRecipe = async (req, res) => {
    const { body: { name, ingredients, preparation }, user } = req;
    const recipe = { name, ingredients, preparation, userId: user };
    const result = await servicesRecipes.createRecipe(recipe);
    if (result.errorType === 'bad_request - invalid entries') {
        return res.status(StatusCodes.BAD_REQUEST).json(result.error);
    }
    return res.status(StatusCodes.CREATED).json(result);
};

const getAllRecipes = async (req, res) => {
    const result = await servicesRecipes.getAllRecipes();
    return res.status(StatusCodes.OK).json(result);
};

module.exports = {
    createRecipe,
    getAllRecipes,
};
