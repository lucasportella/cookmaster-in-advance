const { StatusCodes } = require('http-status-codes');
const servicesUsers = require('../services/users');

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const userData = { name, email, password };
    const result = await servicesUsers.createUser(userData);
    if (result.error) {
        return res.status(StatusCodes.BAD_REQUEST).json(result.error);
    }

    return res.status(StatusCodes.CREATED).json(result);
};

module.exports = {
    createUser,
};
