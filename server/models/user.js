const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    first: { type: String, required: true },
    last: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true }, 
    dateCreated: { type: Date, required: true, default: Date.now() }
},{
    toObject : {getters: true},
    toJSON : {getters: true}
})
 

module.exports = mongoose.model('User', UserSchema);