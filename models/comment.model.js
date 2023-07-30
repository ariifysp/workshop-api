const mongoose = require('mongoose')
const { Schema, model } = mongoose

const CommentSchema = new Schema({
  commentId: Number,
  interviewId: Number,
  message: String,
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

const CommentModel = model('comment', CommentSchema)

module.exports = CommentModel