const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title: {
        type: String,
        required: "Le titre est requis"
    },
    content: {
        type: String,
        required: true
    },
    like: {
        type: Number
    },
    dislike: {
        type: Number
    },
    views: {
        type: Number
    },
    categories_id: {
        type: Array
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

postSchema.pre('findByIdAndUpdate', function () {
    this.set({
        updated_at: Date.now()
    });
});

postSchema.pre('updateOne', function () {
    this.set({
        updated_at: Date.now()
    });
});

module.exports = mongoose.model('Post', postSchema);
