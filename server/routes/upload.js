'use strict'
const router = require('express').Router(); 
const { upload } = require('../controllers')
const multer = require('../helpers').upload

router.post('/images', multer.single('image'), upload.singleImage) 

module.exports = router;