const connection = require('./connection');

const createRecipe = async (recipe) => {
    const db = await connection();
    const result = await db.collection('recipes').insertOne({ recipe });
    return result;
};

module.exports = {
    createRecipe,
};
