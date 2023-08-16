const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const imageSchema = new mongoose.Schema({
    url: {type: String, required: true},
    title: {type: String, default:""}, 
    description: { type: String},
    
})

const postSchema = new Schema(
    {
        title: {
            type: String, 
            required: true,  
        }, 
        body: { 
            type: String,
            max: 250, 
            required: true, 
        }, 
        comments: [{
            type: Schema.Types.ObjectId, 
            ref: 'Comment'
        }], 
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

module.exports = mongoose.model('Post', postSchema);