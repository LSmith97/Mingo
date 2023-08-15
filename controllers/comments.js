const Post = require("../models/post")
const Comment = require("../models/comment")

module.exports = {
    create,
    remove,
    edit,
    update: updatePost,
}

async function create(req, res) {
    const commentData = { ...req.body }
    const parent = await Post.findById(req.params.id)
    commentData.parentId = parent._id
    commentData.user = req.user._id;
    commentData.userName = req.user.name;
    commentData.userAvatar = req.user.avatar;
    try {
        const createdComment = await Comment.create(commentData)
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

    const deletedComment = await Comment.findById(req.params.commentId);
    await Comment.deleteOne({ _id: req.params.commentId });
    const parentPost = await Post.findById(req.params.id);
    
    const index = parentPost.comments.indexOf(deletedComment._id)
    parentPost.comments.splice(index, 1);
    parentPost.save();

    res.redirect(`/posts/${req.params.id}`)
}

async function edit(req, res) {
    const comment = await Comment.findById(req.params.id)

    res.render('comments/edit', {
        title: 'Edit Post', 
        comment,
        errorMsg: ""})
}

async function updatePost(req, res) {
    try {
        const edittedComment = await Comment.findById(req.params.id)
        const commentData = {...req.body} 
        commentData.isEdited = true;
        
        for (key in commentData){
            edittedComment[key] = commentData[key]
        }

        edittedComment.save()
        res.redirect(`/posts/${edittedComment.parentId}`);
    } catch (err) {
        console.log(err);
    }
}