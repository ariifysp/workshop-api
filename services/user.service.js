const jwt = require('jsonwebtoken')
const config = require('../config')
const UserData = require('../data/user.data')
const GenerateHelper = require('../helpers/generate.helper')
const CustomError = require('../errors/custom.error')

const userCreateService = async (data) => {
  try {
    const { name, email, password, decode } = data
    const checkUser = await UserData.getUserByEmail(email)
    if (checkUser) throw new CustomError('DuplicateError', `This email ${email} has been already used`)
    const saltKey = GenerateHelper.generateKey(10)
    const secretKey = GenerateHelper.encryptKey(saltKey + password)
    const user = {
      name: name,
      email: email,
      saltKey: saltKey,
      secretKey: secretKey,
      createBy: decode.userId,
    }
    await UserData.createUser(user)
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

const userLoginService = async (data) => {
  try {
    const { email, password } = data
    const user = await UserData.getUserByEmail(email)
    if (!user) throw new CustomError('InvalidRequestError', 'Invalid email or password')

    const secretKey = GenerateHelper.encryptKey(user.saltKey + password)
    if (secretKey !== user.secretKey) throw new CustomError('InvalidRequestError', 'Invalid email or password')

    const payload = {
      userId: user._id,
    }
    const accessToken = jwt.sign(payload, config.PRIVATE_KEY, { expiresIn: '1d' })
    return accessToken
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

module.exports = {
  userCreateService,
  userLoginService
}