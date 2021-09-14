const modelsRecipes = require('../models/recipes');

const createRecipe = async (recipe) => {
    const { name, ingredients, preparation } = recipe;
    if ([name, ingredients, preparation].includes(undefined)) {
        return { errorType: 'bad_request - invalid entries',
        error: { message: 'Invalid entries. Try again.' } };
    }
    const result = await modelsRecipes.createRecipe(recipe);
    return result;
};

module.exports = {
    createRecipe,
};
