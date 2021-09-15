const jwt = require('jsonwebtoken');

const generateJwtToken = async (req, res, next) => {
    const { email, password } = req.body;
    const secret = 'mysecretexample';
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
    };
    const token = jwt.sign({ email, password }, secret, jwtConfig);

    req.token = { token };

    next();
};

module.exports = generateJwtToken;
