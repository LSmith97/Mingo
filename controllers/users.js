const Post = require("../models/post");
const Comment = require("../models/comment");
const User = require("../models/user");

module.exports = {
    show,
}

async function show(req, res, next){
    try {
        const user = await User.findById(req.params.id);
        const allPosts = await Post.find({user: req.params.id});

        res.render("users/show", {
          title: "User Details",
          user,
          allPosts,
        })
      } catch (err) {
         console.log(err)
         next(Error(err)) 
    }
}