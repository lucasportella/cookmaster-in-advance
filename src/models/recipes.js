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
    const result = await db.collection('recipes').findOne(ObjectId(id));
    return result;
};

const editRecipe = async (payload, id) => {
    const db = await connection();
    await db.collection('recipes').updateOne({ _id: ObjectId(id) }, { $set: { ...payload } });
    const result = await getRecipeById(id);
    return result;
};

const deleteRecipe = async (id) => {
    const db = await connection();
    const result = await db.collection('recipes').deleteOne({ _id: ObjectId(id) });
    return result.deletedCount;
};

const addImageToRecipe = async () => {
    
};

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    editRecipe,
    deleteRecipe,
    addImageToRecipe,
};
