'use strict'

const helper = require('../helpers').admin, 
{ url } = require('../config/consts'),
adminURL = url + '/admin',
ctrl = {}

ctrl.index = async (req, res)=>{
    res.render('index', {url: adminURL, admin: true })
}

ctrl.home = async (req, res)=>{
    res.render('index', {url: adminURL, admin: true, logged: true, token: req.user.token })
}

ctrl.panel = async (req, res)=>{
    res.render('admin', {url: adminURL, admin: true, logged: true, token: req.user.token})
}

ctrl.about = async (req, res)=>{
    res.render('about', {url: adminURL, admin: true, logged: true, token: req.user.token})
}

ctrl.categories = async (req, res)=>{
    res.render('categories', {url: adminURL, admin: true, logged: true, token: req.user.token})
}

module.exports = ctrl