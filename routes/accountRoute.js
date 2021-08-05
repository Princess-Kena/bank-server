const express = require('express');
const { createAccountController, listAccountController } = require('../controllers/accountController');

const router = express.Router();

router.post('/account', createAccountController)
router.get('/accounts ', listAccountController);

module.exports =router;