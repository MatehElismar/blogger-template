'use strict'
const router = require('express').Router();
const { posts } = require('../controllers')
// Helper account
const account = require('../helpers').account
const isLogged = account.verifyUserMidleware;

router.get('/', posts.index);

router.post('/', isLogged, posts.add)

router.put('/', isLogged, posts.update)

router.delete('/:postID', isLogged, posts.remove)

router.get('/categorie', posts.getCategorie)

router.post('/categorie', isLogged, posts.addCategorie)

module.exports = router;