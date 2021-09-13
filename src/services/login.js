const modelsLogin = require('../models/login');

const makeLogin = async (email, password) => {
    const result = await modelsLogin.makeLogin(email, password);
    return result;
};

module.exports = {
    makeLogin,
};
