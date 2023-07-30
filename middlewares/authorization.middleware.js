const jwt = require('jsonwebtoken')
const config = require('../config')
const { getUserById } = require('../data/user.data')

const authorization = (req, res, next) => {
  try {
    const authorization = req.headers['authorization']
    if (!authorization) {
      return res.status(401).json({
        status: 0,
        message: 'Invalid access token',
        error: 'Unauthorization'
      })
    }
    const accessToken = authorization.split(' ')[1]
    jwt.verify(accessToken, config.PRIVATE_KEY, async (error, decode) => {
      if (error) {
        return res.status(401).json({
          status: 0,
          message: 'Access denied',
          error: 'Forbidden'
        })
      }
      const user = await getUserById(decode.userId)
      req.decode = {
        userId: user.userId,
      }
      next()
    })
  } catch (error) {
    return res.status(401).json({
      status: 0,
      message: 'Invalid access token',
      error: 'Unauthorization'
    })
  }
}

module.exports = {
  authorization
}