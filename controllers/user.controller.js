const UserValidator = require('../validators/user.validator')
const UserService = require('../services/user.service')
const { defaultHandler } = require('./handler.controller')

const userCreateController = async (req) => {
  const data = await UserValidator.userCreateValidator({...req.body})
  await UserService.userCreateService({...data, decode: req.decode})
  return {
    status: 1,
    message: 'Create user successfully'
  }
}

const userLoginController = async (req) => {
  const data = await UserValidator.userLoginValidator({...req.body})
  const result = await UserService.userLoginService(data)
  return {
    status: 1,
    message: 'Login successfully',
    accessToken: result
  }
}

module.exports = {
  userCreateController: defaultHandler({
    handler: userCreateController
  }),
  userLoginController: defaultHandler({
    handler: userLoginController
  })
}