'use strict'

const helper = require('../helpers').posts,
{ Post, Categorie } = require('../models'),
ctrl = {}


ctrl.index = async (req, res)=>{
    let posts = await Post.find()
    res.json(posts);
}

ctrl.add = async (req, res)=>{
   helper.validate(req.body, res, async (value)=>{
       const newPost = Post({
           title: value.title,
           content: value.content,
           ownerID: req.user._id
       })

       //Save the data
       let post = await newPost.save() 
       if(post) res.json(post)
       else
        res.render('error', {msg: 'Something was wrong with the database'})
   })
}

ctrl.update = async (req, res)=>{
    helper.validate(req.body, res, async (value)=>{
        const updatePost = Post({
            title: value.title,
            content: value.content,
            ownerID: req.user._id
        })

        // Update the data
       let post = await updatePost.updateOne(); 
       if(post) res.json(post)
       else
        res.render('error', {msg: 'Something was wrong with the database'})
    })
}

ctrl.remove = async (req, res)=>{
    result = await Post.findByIdAndRemove(req.params.postID)
    res.json(result)
}

ctrl.getCategorie = async (req, res)=>{
    let categories = await Categorie.find()
    res.json(categories);
}

ctrl.addCategorie = async (req, res)=>{
    helper.validateCat(req.body, res, async (value)=>{
        const newCat = Categorie({
            name: value.name,
            description: value.description,
            keywords: value.keywords
        })

        // Saving data
       let categorie = await newCat.save(); 
       if(categorie) res.json(categorie)
       else
        res.render('error', {msg: 'Something was wrong with the database'})
    })
}


module.exports = ctrl;