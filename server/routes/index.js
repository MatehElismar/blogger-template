'use strict'
const helper = require('../helpers').routes
const isLogged = require('../helpers').account.verifyUserFromParams
const verifyUser = require('../helpers').account.verifyUser
const { url } = require('../config/consts') 

module.exports = (app)=>{

    // Ruta Principal De La Aplicacion.
    app.get('/', async (req, res)=>{
            res.render('index', {url})
    })

    app.get('/about', helper.render)
    app.get('/categories', helper.render) 
     
    // Dinamic routes   
    app.use('/posts', require('./posts')) 
    app.use('/admin', require('./admin')) 
    app.use('/account', require('./account')) 
    
}