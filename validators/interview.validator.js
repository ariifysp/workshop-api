const Joi = require('joi')
const CustomError = require('../errors/custom.error')

const interviewCreateValidator = (data) => {
  const schema = Joi.object({
    topic: Joi.string().required(),
    detail: Joi.string().required(),
  })
  const validate = schema.validate(data)
  if (validate.error) throw new CustomError('InvalidRequestError', validate.error.details[0].message)
  return validate.value
}

const interviewListwValidator = (data) => {
  const schema = Joi.object({
    keyword: Joi.string(),
    page: Joi.number(),
    pagesize: Joi.number(),
  })
  const validate = schema.validate(data)
  if (validate.error) throw new CustomError('InvalidRequestError', validate.error.details[0].message)
  return validate.value
}

const interviewValidator = (data) => {
  const schema = Joi.object({
    interviewId: Joi.string().required(),
  })
  const validate = schema.validate(data)
  if (validate.error) throw new CustomError('InvalidRequestError', validate.error.details[0].message)
  return validate.value
}

const interviewStatusValidator = (data) => {
  const schema = Joi.object({
    interviewId: Joi.string().required(),
    status: Joi.string().required().valid('In Progress', 'Done'),
  })
  const validate = schema.validate(data)
  console.log(validate)
  if (validate.error) throw new CustomError('InvalidRequestError', validate.error.details[0].message)
  return validate.value
}

module.exports = {
  interviewCreateValidator,
  interviewListwValidator,
  interviewValidator,
  interviewStatusValidator
}