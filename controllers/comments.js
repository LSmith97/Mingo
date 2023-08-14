const Post = require("../models/post")
const Comment = require("../models/comment")

module.exports = {
    create,
    remove,
}

async function create(req, res) {
    const commentData = { ...req.body }
    const parent = await Post.findById(req.params.id)
    commentData.parentId = parent._id
    try {
        const createdComment = await Comment.create(commentData)
        console.log(parent)
        console.log(createdComment)
        parent.comments.push(createdComment._id)
        await parent.save()
        res.redirect(`/posts/${parent._id}`)
    }
    catch (err) {
        console.log(err);
        res.redirect(`/posts/${parent._id}`)
    }
}

async function remove(req, res) {
    await Comment.deleteOne({ _id: req.params.commentId })
    res.redirect(`/posts/${req.params.id}`)
}
