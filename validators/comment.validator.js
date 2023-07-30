const Joi = require('joi')
const CustomError = require('../errors/custom.error')

const commentCreateValidator = (data) => {
  const schema = Joi.object({
    interviewId: Joi.string().required(),
    message: Joi.string().required(),
  })
  const validate = schema.validate(data)
  if (validate.error) throw new CustomError('InvalidRequestError', validate.error.details[0].message)
  return validate.value
}

module.exports = {
  commentCreateValidator
}