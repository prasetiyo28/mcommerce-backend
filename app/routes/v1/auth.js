const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/AuthController')
// GET users listing.
router.get('/',AuthController.getUsers);
module.exports = router;

