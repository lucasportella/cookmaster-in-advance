const { StatusCodes } = require('http-status-codes');
const servicesUsers = require('../services/users');

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const userData = { name, email, password };
    const result = await servicesUsers.createUser(userData);

    if (result.errorType === 'bad_request') {
        return res.status(StatusCodes.BAD_REQUEST).json(result.error);
    }
    if (result.errorType === 'conflict') {
        return res.status(StatusCodes.CONFLICT).json(result.error);
    }

    return res.status(StatusCodes.CREATED).json(result);
};

const createAdmin = async (req, res) => {
    const { name, email, password } = req.body;
    const adminData = { name, email, password };
    const result = await servicesUsers.createAdmin(adminData);
    return res.status(StatusCodes.CREATED).json(result);
};

module.exports = {
    createUser,
    createAdmin,
};
