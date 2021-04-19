const Post = require('../models/postModel');

const spaceXApiProvider = require('../providers/spaceXApiProvider');

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

    newPost.like = 0;
    newPost.dislike = 0;
    newPost.views = 1;
    // let lastMission = spaceXApiProvider.getLastMission();
    let lastLaunche = spaceXApiProvider.getLastLaunche();

    // lastMission.then(response => {
    lastLaunche.then(response => {


        if (!newPost.content) {
            console.log(response)
            // newPost.content = response.description;
            newPost.content = response.details;
        }

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
    });
}

exports.getAPost = (req, res) => {
    Post.findById(req.params.id_post, (error, post) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            post.views++;
            Post.findByIdAndUpdate(req.params.id_post, post, {
                new: true
            }, (error, post) => {
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
        }
    });
};

exports.updateAPost = (req, res) => {
    Post.findByIdAndUpdate(req.params.id_post, doc, {
        new: true
    }, (error, post) => {
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

exports.likeAPost = (req, res) => {
    Post.findById(req.params.id_post, (err, doc) => {
        if (err) {
            res.status(500);
        }

        doc.like++;
        Post.findByIdAndUpdate(req.params.id_post, doc, {
            new: true
        }, (error, post) => {
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
    });
};

exports.dislikeAPost = (req, res) => {
    Post.findById(req.params.id_post, (err, doc) => {
        if (err) {
            res.status(500);
        }

        doc.dislike++;
        Post.findByIdAndUpdate(req.params.id_post, doc, {
            new: true
        }, (error, post) => {
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
    });
};

exports.deleteAPost = (req, res) => {
    Post.findByIdAndDelete(req.params.id_post, (error) => {
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