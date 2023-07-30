const UserModel = require('../models/user.model')
const CustomError = require('../errors/custom.error')
const QueryHelper = require('../helpers/query.helper')

const getUserById = async (userId) => {
  try {
    const condition = {
      isDelete: false,
      _id: userId
    }
    return await UserModel.findOne(condition)
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

const getUserByUserId = async (userId) => {
  try {
    const condition = {
      isDelete: false,
      userId: userId
    }
    return await UserModel.findOne(condition)
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

const getUsersByUserIds = async (userIds) => {
  try {
    const condition = {
      isDelete: false,
      userId: { $in: userIds }
    }
    return await UserModel.find(condition)
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

const getUserByEmail = async (email) => {
  try {
    const condition = {
      isDelete: false,
      email: email
    }
    return await UserModel.findOne(condition)
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

const createUser = async (data) => {
  try {
    const userId = await QueryHelper.autoIncrement('userId')
    const user = new UserModel({userId, ...data})
    await user.save()
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

module.exports = {
  getUserById,
  getUserByUserId,
  getUsersByUserIds,
  getUserByEmail,
  createUser,
}