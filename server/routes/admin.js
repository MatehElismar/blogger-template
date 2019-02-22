'use strict'
const router = require('express').Router();
const { admin } = require('../controllers')
// Helper account
const { account } = require('../helpers')
const helper = require('../helpers').admin
const isLogged = account.verifyUserFromParams;

router.get('/', admin.index);
router.get('/:token', isLogged, admin.home);

router.get('/panel/:token', isLogged, admin.panel)
router.get('/about/:token', isLogged, admin.about)
router.get('/categories/:token', isLogged, admin.categories)

module.exports = router;