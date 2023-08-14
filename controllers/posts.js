const Post = require("../models/post")
const Comment = require("../models/comment")

module.exports = {
    index,
    show,
    new: newPost,
    create
}

async function index(req, res) {
    try {
        const results = await Post.find({})
        res.render('/posts/index', { title: "All Posts", posts: results })
    } catch (err) {
        console.log(err);
    }

}

async function show(req, res) {
    res.render('posts/show')
}

function newPost(req, res) {
    res.render('posts/new')
}

async function create(req, res) {
    res.redirect('/posts')
} 