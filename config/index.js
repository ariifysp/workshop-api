require('dotenv').config()

const config = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  PRIVATE_KEY: process.env.PRIVATE_KEY,
}

module.exports = config