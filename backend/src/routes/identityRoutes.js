const express = require('express');
const router = express.Router();
const identityController = require('../controllers/identityController');

router.post('/validate', identityController.validateDni);

module.exports = router;