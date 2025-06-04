const User = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.createUser = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  return await newUser.save();
};

exports.validateUser = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) return null;
  const isValid = await bcrypt.compare(password, user.password);
  return isValid ? user : null;
};
