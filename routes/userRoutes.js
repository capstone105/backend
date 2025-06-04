const userController = require('../controllers/userController');

module.exports = [
  {
    method: 'GET',
    path: '/api/users',
    handler: userController.getUsers
  }
];
