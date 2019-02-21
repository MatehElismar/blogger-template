'use strict'
const helper = require('../helpers').routes
const isLogged = require('../helpers').account.verifyUserFromParams
const verifyUser = require('../helpers').account.verifyUser
const { url } = require('../config/consts') 

module.exports = (app)=>{

    // Ruta Principal De La Aplicacion.
    app.get('/:token?', async (req, res)=>{
        console.log('token',req.param('token'))
        if(req.param('token'))
            res.render('index', {
                url,
                logged: (await verifyUser(req.params.token))?true:false, 
                token: req.params.token });
        else      
            res.render('index', {url})
    })

    // static routes
    app.get('/about/:token?', helper.render)
    app.get('/admin/:token?', helper.render)
     
    // Dinamic routes   
    app.use('/posts', require('./posts')) 
    app.use('/account', require('./account')) 
    
}