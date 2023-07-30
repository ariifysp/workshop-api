const mongoose = require('mongoose')
const { Schema, model } = mongoose

const UserSchema = new Schema({
  userId: Number,
  name: String,
  imageKey: String,
  email: String,
  saltKey: String,
  secretKey: String,
  isDelete: {
    type: Boolean,
    default: false
  },
  createBy: Number,
  createDt: {
    type: Date,
    default: Date.now
  },
  updateBy: Number,
  updateDt: Date
})

const UserModel = model('user', UserSchema)

module.exports = UserModel