const connection = require('./connection');

const createRecipe = async (recipe) => {
    const db = await connection();

    const result = await db.collection('recipes').insertOne({ recipe });
    return { recipe: { ...result.ops[0].recipe, _id: result.insertedId } };
};

module.exports = {
    createRecipe,
};
