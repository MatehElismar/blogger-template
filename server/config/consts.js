'use strict'
const mongoose = require('mongoose')

module.exports = {
    url: '',
    db: {
        uri: 'mongodb://localhost/blogger'
    },
    initializeDB: async ()=>{
       return mongoose.connect(module.exports.db.uri, { useNewUrlParser: true })
        .then(res=>{
            console.log('Conected to DB: ', res.connections[0].name)
        })
        .catch(err=>{
            console.error('\nThere\'s an error here\n', err)
        })
    }
}