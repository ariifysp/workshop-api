const CommentModel = require('../models/comment.model')
const CustomError = require('../errors/custom.error')
const QueryHelper = require('../helpers/query.helper')

const createComment = async (data) => {
  try {
    const commentId = await QueryHelper.autoIncrement('commentId')
    const comment = new CommentModel({commentId, ...data})
    await comment.save()
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

const getCommentList = async (interviewId) => {
  try {
    const condition = {
      isDelete: false,
      interviewId: interviewId,
    }
    const comments = await CommentModel.find(condition).sort({ createDt: -1 })
    return comments
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

module.exports = {
  createComment,
  getCommentList,
}