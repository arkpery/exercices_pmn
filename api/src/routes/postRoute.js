const postController = require('../controllers/postController');

module.exports = (server) => {
    server.route('/posts')
        .get(postController.listAllPosts)
        .post(postController.createAPost);

    server.route('/posts/:id_post') // req.params.id_post
        .get(postController.getAPost)
        .put(postController.updateAPost)
        .delete(postController.deleteAPost);

    server.route("/posts/:id_post/like")
        .get(postController.likeAPost);

    server.route("/posts/:id_post/dislike")
        .get(postController.dislikeAPost);
};