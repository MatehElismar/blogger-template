'use strict'
const router = require('express').Router();
const { account } = require('../controllers')

router.post('/login', account.login);

router.post('/logout', account.logout);

router.post('/restore', account.restorePass); 

module.exports = router;