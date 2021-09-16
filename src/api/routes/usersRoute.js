const express = require('express');

const controllersUsers = require('../../controllers/users');

const router = express.Router();

router.post('/', controllersUsers.createUser);

router.post('/admin', controllersUsers.createAdmin);

module.exports = router;