const { StatusCodes } = require('http-status-codes');
const servicesLogin = require('../services/login');

const makeLogin = async (req, res) => {
    const { email, password } = req.body;
    const result = await servicesLogin.makeLogin(email, password);
    return res.status(StatusCodes.OK).json(req.token);
};

module.exports = {
    makeLogin,
};
