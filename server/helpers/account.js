'use strict'
const jwt = require('jsonwebtoken')
const { User } = require('../models');
// Funciones que se utilizaran para ayudar a manejar los datos : POSTS

//ATENCION: Todas las peticiones que se devuelvan con un atributo json { ok: false } 
// seran clasificadas en el cliente como errores

module.exports = { 
    error: '', //static current error information
    validate: async (body, res, next)=>{
        let error = {}
        error.ok = false;
        let result = await User.findOne({email: body.email})
        if(result){
            //Already exists an user with this email address...
            error.title = 'This user is already registered...'
            res.json(error)
        }
        else{
            // After validation
            if(next)
                return next(body);
            console.log('Olvido pasar el callback next a la funcion validate')
            res.send('Olvido pasar el callback next a la funcion validate')
        }
    },

    signUser: (userID)=>{  
        return jwt.sign({
            iis: 'code',
            _id: userID,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate() + 1)
        }, 'blogger-template');
    },

    verifyUser: async (userToken)=>{ 
        return await jwt.verify(userToken, 'blogger-template', (err, data)=>{
            //Si no hubo error en la verificacion
            if(!err) return data._id; else undefined
        })
    },


     verifyUserMidleware: (req, res, next)=>{ 
        let token = req.header('blogger-auth')
        
        jwt.verify(token, 'blogger-template', (err, data)=>{
            //Si no hubo error en la verificacion
            if(!err) {
                req.user = {}
                req.user._id = data._id 
                req.user.token = token 
                console.log('peticion aceptada')
                next() 
            }
            else{
                res.status(401).send('Unautorized Request')
            }
        })
    },

     verifyUserFromParams: (req, res, next)=>{ 
        let token = req.params.token;
        jwt.verify(token, 'blogger-template', (err, data)=>{
            //Si no hubo error en la verificacion
            if(!err) { 
                req.user = {}
                req.user._id = data._id 
                req.user.token = token 
                console.log('peticion aceptada')
                next()
            }
            else{
                console.log('peticion rechazada')
                res.status(401).send('Unautorized Request')
            }
        })
    } 
}