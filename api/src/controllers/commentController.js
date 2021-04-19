const Comment = require('../models/commentModel');
const Post = require("../models/postModel");

exports.listAllComments = (req, res) => {
    Comment.find({
        id_post: req.params.id_post
    }, (error, comments) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json(comments);
        }
    });
}

exports.createAComment = (req, res) => {
    const body = req.body;
    body.id_post = req.params.id_post;
    let newComment = new Comment(body);

    console.log(newComment);
    newComment.save((error, comment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            Post.findById(comment.id_post, (err, post) => {
                if (!post.linked_comments_id) {
                    post.linked_comments_id = [];
                }
                post.linked_comments_id.push(comment._id);
                post.save()
                res.status(201);
                res.json(comment);
            });
        }
    });
}

exports.getAComment = (req, res) => {
    Comment.findById(req.params.id_comment, (error, comment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json(comment);
        }
    })
}

exports.updateAComment = (req, res) => {
    Post.findById(req.body.id_post, (err, post) => {
        if (err) {
            res.status(500);
            console.log(err);
            res.json({
                message: "Erreur serveur."
            });
            return;
        }
        const body = req.body;

        Comment.findByIdAndUpdate(req.params.id_comment, body, {
            new: true
        }, (error, comment) => {
            if (error) {
                res.status(500);
                console.log(error);
                res.json({
                    message: "Erreur serveur."
                });
            } else {
                res.status(200);
                res.json(comment);
            }
        });
    });
};

exports.deleteAComment = (req, res) => {
    Comment.findByIdAndDelete(req.params.id_comment, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json({
                message: "Article supprimé"
            });
        }
    });
}