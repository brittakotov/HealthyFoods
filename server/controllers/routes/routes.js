const express = require('express');
const marketplace = require('../marketplace/marketplace.js');

let healthyfood = express.Router();

healthyfood.get('/ingredients', marketplace.getAllIngredients);

module.exports.healthyfood = healthyfood;