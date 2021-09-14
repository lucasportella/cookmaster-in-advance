const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createRecipe = async (recipe) => {
    const db = await connection();

    const result = await db.collection('recipes').insertOne(recipe);
    return { recipe: result.ops[0] };
};

const getAllRecipes = async () => {
    const db = await connection();
    const result = await db.collection('recipes').find({}).toArray();
    return result;
};

const getRecipeById = async (id) => {
    const db = await connection();
    const result = await db.collection('recipes').find(ObjectId(id));
    return result;
};

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
};
