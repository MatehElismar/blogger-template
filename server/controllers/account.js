'use strict'

const helper = require('../helpers').posts,
{ Post } = require('../models'),
ctrl = {}

ctrl.login = async (req, res)=>{
    res.json(req.body)
}

ctrl.logout = async (req, res)=>{
    
}

ctrl.restorePass = async (req, res)=>{
    
}

module.exports = ctrl