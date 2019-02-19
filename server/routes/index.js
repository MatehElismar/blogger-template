'use strict'
const helper = require('../helpers').routes

module.exports = (app)=>{

    // Ruta Principal De La Aplicacion.
    app.get('/', (req, res)=>{
        res.render('index');
    })

    app.get('/about', helper.render)

    app.use('/posts', require('./posts'))

    app.use('/account', require('./account'))
    
}