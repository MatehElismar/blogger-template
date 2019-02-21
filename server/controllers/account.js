'use strict'

const helper = require('../helpers').account,
{ User } = require('../models'),
ctrl = {}

ctrl.login = async (req, res)=>{
    console.log('user', req.body)
    let user = await User.findOne({email: req.body.email, pass : req.body.pass})
    if(user){
        let token = helper.signUser(user._id) 

        res.json({ 
            ok:true, 
            user: { 
                name: `${user.first} ${user.last}`, 
                dateCreated: user.dateCreated,
                email: user.email
            },
            token
        })
    }
    else res.json({ok:false, msg: 'Incorrect Credentials'})
}

ctrl.sign = (req, res)=>{
    helper.validate(req.body, res, async (value)=>{
        // After validation'
        let newUser = User({
            first: req.body.first,
            last: req.body.last,
            email: req.body.email,
            pass: req.body.pass,
        })

        // Saving data
        let user = await newUser.save();
        if(user){
           let token = helper.signUser(user._id)
           
           res.json({ 
            ok:true, 
            user: { 
                name: `${user.first} ${user.last}`, 
                dateCreated: user.dateCreated,
                email: user.email
            },
            token
        })
        }
        else{
            res.render('error', {msg: 'Something was wrong with the database'});
        }

    })
}

ctrl.logout = async (req, res)=>{
    res.send('logged out')
}

ctrl.restorePass = async (req, res)=>{
    
}

module.exports = ctrl