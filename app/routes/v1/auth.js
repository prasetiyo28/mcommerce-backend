const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/AuthController');
// GET users listing.
router.post('/get/login', AuthController.getUsers);
module.exports = router;
