'use strict'

module.exports = {
    account: require('./account'),
    upload: require('./upload'),
    posts : require('./posts'),
    
    //Static Helpers
    routes: {
        render: (req, res)=>{
            let view = req.url.replace('/', '')
            res.render(view, {
                title: view.toUpperCase()
            })
        }
    }
}