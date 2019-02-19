'use strict'

const helper = require('../helpers').posts,
{ Post } = require('../models'),
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


module.exports = ctrl;