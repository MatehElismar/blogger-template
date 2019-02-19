'use strict'
const jwt = require('jsonwebtoken')
const { User } = require('../models');
// Funciones que se utilizaran para ayudar a manejar los datos : POSTS

//ATENCION: Todas las peticiones que se devuelvan con un atributo json { ok: false } 
// seran clasificadas en el cliente como errores

module.exports = { 
    error: '', //static current error information
    validate: async (req)=>{
        let error = {}
        error.ok = false;
        let res = await User.findOne({email: req.body.email})
        if(res){
            //Already exists an user with this email address...
            error.title = 'This user is already registered...'
            res.json(error)
        }
        else{
            // After validation
            return next(post);
        }
    }
}