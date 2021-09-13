const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const modelsUsers = require('../models/users');

const secret = 'mysecretexample';

const validateJWT = async (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'jwt malformed' });
    }
    
    const decoded = jwt.verify(token, secret);
    console.log(decoded);

    const user = await modelsUsers.findUser(decoded.data);
    next();
};

module.exports = {
    validateJWT,
};