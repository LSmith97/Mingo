const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const commentSchema = new Schema(
    { 
        parentId: {
            type: Schema.Types.ObjectId, 
            ref: 'Post'
        },
        body: { 
            type: String,
            max: 250, 
            required: true, 
        }, 
        isEdited: {
            type: Boolean, 
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        userName: String,
        userAvatar: String
    }, {
        timestamps: true, 
    }
)

module.exports = mongoose.model('Comment', commentSchema)