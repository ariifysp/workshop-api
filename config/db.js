const mongoose = require('mongoose')
const config = require('./index')

const connectDB = () => {
  mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB')
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error)
  })
}

module.exports = {
  connectDB
}