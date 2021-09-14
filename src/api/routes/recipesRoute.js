const express = require('express');

const controllersRecipes = require('../../controllers/recipes');
const middlewares = require('../../middlewares/validateJWT');

const router = express.Router();

router.post('/', middlewares.validateJWT, controllersRecipes.createRecipe);

router.get('/', controllersRecipes.getAllRecipes);

module.exports = router;