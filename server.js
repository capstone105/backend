require('dotenv').config();
const Hapi = require('@hapi/hapi');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const careerRoutes = require('./routes/careerRoutes');

connectDB(); // koneksi ke MongoDB
const modelRoutes = require('./routes/modelRoutes');
app.use('/api/model', modelRoutes);

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 5000,
    host: 'localhost',
    routes: { cors: { origin: ['*'] } }
  });

  server.route([...authRoutes, ...userRoutes, ...careerRoutes]);

  await server.start();
  console.log('Server berjalan di:', server.info.uri);
};

init();
