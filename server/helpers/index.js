'use strict'
const verifyUser = require('./account').verifyUser;
const { url } = require('../config/consts') 

module.exports = {
    account: require('./account'),
    upload: require('./upload'),
    posts : require('./posts'),
    admin : require('./admin'),
    
    //Static Helpers
    routes: {
        render: async (req, res)=>{
            let view = req.url.split('/')[1]; 
            console.log('view', view)
                res.render(view, { 
                    url,
                    title: view.toUpperCase()
                })
        }
    }
}