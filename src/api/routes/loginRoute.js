const express = require('express');

const controllersLogin = require('../../controllers/login');
const middlewares = require('../../middlewares/jsonWebToken');

const router = express.Router();

router.post('/', middlewares.generateJwtToken, controllersLogin.makeLogin);

module.exports = router;
