const userController = require('../controllers/userController');

module.exports = (server) => {
    server.post('/api/user/register', userController.userRegister);
    server.post('/api/admin/register', userController.adminRegister);
    server.post('/api/user/login', userController.userLogin);
}