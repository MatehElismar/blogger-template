'use strict'
const verifyUser = require('./account').verifyUser;
const { url } = require('../config/consts') 

module.exports = {
    account: require('./account'),
    upload: require('./upload'),
    posts : require('./posts'),
    
    //Static Helpers
    routes: {
        render: async (req, res)=>{
            let view = req.url.split('/')[1]; 
            let token = await verifyUser(req.params.token);
            console.log('token', token)
            console.log('view', view)
            if(req.params.token)
                res.render(view, {
                    url,
                    logged: (token) ? true : false, 
                    token: req.params.token,
                    title: view.toUpperCase()
                }) 
            else    
                res.render(view, { 
                    url,
                    title: view.toUpperCase()
                })
        }
    }
}