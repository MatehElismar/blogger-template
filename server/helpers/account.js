'use strict'
const jwt = require('jsonwebtoken')
const { Post } = require('../models');
// Funciones que se utilizaran para ayudar a manejar los datos : POSTS

//ATENCION: Todas las peticiones que se devuelvan con un atributo json { ok: false } 
// seran clasificadas en el cliente como errores

module.exports = { 
    error: '', //static current error information
    validate: (req)=>{
        let error = {}
        error.ok = false;
        let res = await Post.findOne({title: post.title})
        if(res){
            // Ya existe un post con este titulo...
            error.title = 'Ya existe un post con este titulo...'
            res.json(error)
        }
        else{
            // After validation
            return next(post);
        }
    }
}