const errorHandler = require('./error.controller')

const defaultHandler = ({ handler }) => {
  return async (req, res) => {
    try {
      const defaultSchema = {
        status: 1,
        message: 'Success'
      }
      const responseJson = await handler(req, res)
      res.json({
        ...defaultSchema,
        ...responseJson
      })
    } catch (error) {
      errorHandler(error, res)
    }
  }
}

module.exports = {
  defaultHandler
}