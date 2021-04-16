const Post = require('../models/postModel');

exports.listAllPosts = (req, res) => {
    Post.find({}, (error, posts) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json(posts);
        }
    });
}

exports.createAPost = (req, res) => {
    let newPost = new Post(req.body);

    newPost.save((error, post) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(201);
            res.json(post);
        }
    });
};

exports.getAPost = (req, res) => {
    Post.findById(req.params.id_post, (error, post) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json(post);
        }
    });
};

exports.updateAPost = (req, res) => {
    const arg = req.body;
    const filter = {
        "_id": req.params.id_post
    };

    arg._id = filter._id;
    Post.findOneAndUpdate(filter, req.body, {
        new: true
    }, (error, post) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200).json(post);
        }
    });
};

exports.deleteAPost = (req, res) => {
    Post.findOneAndRemove({
        "_id": req.params.id_post
    }, (error, post) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json({
                message: "post deleted"
            });
        }
    });
};