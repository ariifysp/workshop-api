const mongoose = require('mongoose')
const { Schema, model } = mongoose

const CounterSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  sequence: {
    type: Number,
    default: 1
  }
})

const CounterModel = model('counter', CounterSchema)

module.exports = CounterModel