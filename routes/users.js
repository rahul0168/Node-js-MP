const express = require('express');
const router = express.Router();
//controllers
const usersController = require('../controllers/users.controller');

//routes
router.get('/profile',usersController.profile);

module.exports = router;