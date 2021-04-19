const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema({
    name: {
        type: String,
        required: "Le titre est requis"
    },
    message: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    id_post: {
        type: String
    }
});

commentSchema.pre('findByIdAndUpdate', function () {
    this.set({
        updated_at: Date.now()
    });
});

commentSchema.pre('updateOne', function () {
    this.set({
        updated_at: Date.now()
    });
});

module.exports = mongoose.model('Comment', commentSchema);
