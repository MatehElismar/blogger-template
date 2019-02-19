const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },//Html content
    ownerID: { type: mongoose.Types.ObjectId, required: true }, 
    date: { type: Date, required: true, default: Date.now() },
    imagePath: String,
    likes: {type: Number, default: 0},
    categorieID: { type: mongoose.Types.ObjectId, required: true }
},{
    toObject : {getters: true},
    toJSON : {getters: true}
})

module.exports = mongoose.model('Post', PostSchema);