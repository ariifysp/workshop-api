const Joi = require('joi')
const CustomError = require('../errors/custom.error')

const userCreateValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
  })
  const validate = schema.validate(data)
  if (validate.error) throw new CustomError('InvalidRequestError', validate.error.details[0].message)
  return validate.value
}

const userLoginValidator = (data) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
  })
  const validate = schema.validate(data)
  if (validate.error) throw new CustomError('InvalidRequestError', validate.error.details[0].message)
  return validate.value
}

module.exports = {
  userCreateValidator,
  userLoginValidator
}