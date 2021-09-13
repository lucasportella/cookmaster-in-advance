const modelsUsers = require('../models/users');

const createUser = async (userData) => {
    const { name, email, password } = userData;
    if ([name, email, password].includes(undefined)) {
        return { error: { message: 'Invalid entries. Try again.' } };
    }
    const result = await modelsUsers.createUser(userData);
    return result;
};

module.exports = {
    createUser,
};
