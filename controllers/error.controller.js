const errorHandler = (error, response) => {
  if (!response) throw error
  const type = error.name
  const status = statusCode(type)
  return response.status(status).json({
    status: 0,
    message: error.message,
    error: type
  })
}

const statusCode = (type) => {
  switch (type) {
    case 'InvalidRequestError': return 400
    case 'Unauthorization': return 401
    case 'Forbidden': return 403
    case 'NotFoundError': return 404
    case 'DuplicateError': return 409
    default: return 500
  }
}

module.exports = errorHandler
