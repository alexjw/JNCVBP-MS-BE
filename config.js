require('dotenv').config();

module.exports = {
    MONGO_DB: process.env.JNCVBP_MONGO_DB || 'mongodb://localhost:27017/jncvbpms',
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.JNCVBP_HOST || '127.0.0.1',
    PORT: process.env.JNCVBP_PORT || 3000
  }