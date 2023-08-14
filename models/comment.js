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
            required: true, 
        }, 
        isEdited: {
            type: Boolean, 
            default: false
        }, 
        
    }, {
        timestamps: true, 
    }
)

module.exports = mongoose.model('Comment', commentSchema)