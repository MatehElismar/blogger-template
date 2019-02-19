'use strict'
const { Post } = require('../models');
// Funciones que se utilizaran para ayudar a manejar los datos : POSTS

//ATENCION: Todas las peticiones que se devuelvan con un atributo json { ok: false } 
// seran clasificadas en el cliente como errores

module.exports = { 

    validate: async (post, res, next)=>{
        let error = {}
        error.ok = false;
        let result = await Post.findOne({title: post.title})
        if(result){
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