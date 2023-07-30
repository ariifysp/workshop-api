const mongoose = require('mongoose')
const { Schema, model } = mongoose

const InterviewSchema = new Schema({
  interviewId: Number,
  topic: String,
  detail: String,
  status: {
    type: String,
    default: 'To Do',
    enum: ['To Do', 'In Progess', 'Done']
  },
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

const InterviewModel = model('interview', InterviewSchema)

module.exports = InterviewModel