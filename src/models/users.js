const connection = require('./connection');

const createUser = async (userData) => {
    const db = await connection();
    const result = await db.collection('users').insertOne({ ...userData, role: 'user' });
    const { name, email, role, _id } = result.ops[0];
    return { user: { name, email, role, _id } };
};

module.exports = {
    createUser,
};
