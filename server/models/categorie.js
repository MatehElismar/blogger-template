const mongoose = require('mongoose')

const CategorieSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },//Html content
    keywords: { type: Array, required: true }, 
    cantPost: { type: Number, default: 0 }
},{
    toObject : {getters: true},
    toJSON : {getters: true}
})

module.exports = mongoose.model('Categorie', CategorieSchema);