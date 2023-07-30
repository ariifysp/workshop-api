class CustomError extends Error {
    constructor (...params) {
      super(...params)
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, CustomError)
      }
      
      this.name = params[0] || 'InternalError'
      this.message = params[1] || 'Server Error'
    }
}

module.exports = CustomError