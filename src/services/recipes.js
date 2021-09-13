const modelsRecipes = require('../models/recipes');

const createRecipe = async (recipe) => {
    const result = await modelsRecipes.createRecipe(recipe);
    return result;
};

module.exports = {
    createRecipe,
};
