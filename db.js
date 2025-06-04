const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB terkoneksi');
  } catch (err) {
    console.error('Gagal koneksi MongoDB:', err);
  }
};

module.exports = connectDB;
