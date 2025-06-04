const users = []; // Simulasi DB
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (request, h) => {
  const { username, password } = request.payload;

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  return h.response({ message: 'Registrasi berhasil!' }).code(201);
};

exports.login = async (request, h) => {
  const { username, password } = request.payload;

  const user = users.find((u) => u.username === username);
  if (!user) return h.response({ error: 'User tidak ditemukan' }).code(404);

  const match = await bcrypt.compare(password, user.password);
  if (!match) return h.response({ error: 'Password salah' }).code(401);

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return h.response({ token }).code(200);
};
