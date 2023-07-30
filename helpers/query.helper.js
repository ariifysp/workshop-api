const CounterModel = require('../models/counter.model')

const autoIncrement = async (field) => {
  try {
    console.log(field)
    const condition = { _id: field }
    const count = await CounterModel.count(condition)

    let sequence = 1
    if (count === 0) {
      const counter = new CounterModel({_id: field})
      await counter.save()
    } else {
      const counter = await CounterModel.findByIdAndUpdate(
        condition,
        { $inc: { sequence: 1 } },
        { new: true, upsert: true }
      )
      sequence = counter.sequence
    }
    
    return sequence
  } catch (error) {
    console.error('Error autoIncrement', error)
  }
}

module.exports = {
  autoIncrement
}
