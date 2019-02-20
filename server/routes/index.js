'use strict'
const helper = require('../helpers').routes

module.exports = (app)=>{

    // Ruta Principal De La Aplicacion.
    app.get('/', (req, res)=>{
        res.render('index', {logged: true});
    })

    // static routes
    app.get('/about', helper.render)
    app.get('/admin', helper.render)
    
    // Dinamic routes 
    app.use('/posts', require('./posts')) 
    app.use('/account', require('./account'))
    app.use('/account', require('./account')) 
    
}