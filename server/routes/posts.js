'use strict'
const router = require('express').Router();
const { posts } = require('../controllers')

router.get('/', posts.index);

router.post('/', posts.add)

router.put('/', posts.update)

router.delete('/', posts.remove)

router.get('/categorie', posts.getCategorie)

router.post('/categorie', posts.addCategorie)

module.exports = router;