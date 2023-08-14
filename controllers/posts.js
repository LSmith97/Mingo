const Post = require("../models/post")
const Comment = require("../models/comment")

module.exports = {
    index,
    show,
    new: newPost, 
    create
}

async function index(req, res){
    res.render('posts/index')
}

async function show (req, res) { 
    res.render('posts/show')
}

function newPost (req, res) { 
    res.render('posts/new')
} 

async function create (req, res) { 
    res.redirect('/posts')
} 