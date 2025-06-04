const User = require('../models/userModel');

exports.getUsers = async (request, h) => {
  const users = await User.find({}, 'username');
  return h.response(users).code(200);
};
