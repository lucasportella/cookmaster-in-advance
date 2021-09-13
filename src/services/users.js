const modelsUsers = require('../models/users');

const createUser = async (userData) => {
    const { name, email, password } = userData;
    if ([name, email, password].includes(undefined) || !email.match(/\w+@\w+.com/)) {
        return { errorType: 'bad_request', error: { message: 'Invalid entries. Try again.' } };
    }

    if (await modelsUsers.findEmail(email)) {
        return { errorType: 'conflict', error: { message: 'Email already registered' } }; 
}
    const result = await modelsUsers.createUser(userData);
    return result;
};

module.exports = {
    createUser,
};
