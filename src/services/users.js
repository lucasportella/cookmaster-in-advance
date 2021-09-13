const modelsUsers = require('../models/users');

const createUser = async (userData) => {
    const result = await modelsUsers.createUser(userData);
    return result;
};

module.exports = {
    createUser,
};
