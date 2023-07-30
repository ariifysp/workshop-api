const CommentValidator = require('../validators/comment.validator')
const CommentService = require('../services/comment.service')
const { defaultHandler } = require('./handler.controller')

const commentCreateController = async (req) => {
  const data = await CommentValidator.commentCreateValidator({...req.params, ...req.body})
  await CommentService.commentCreateService({...data, ...req.decode})
  return {
    status: 1,
    message: 'Create comment successfully'
  }
}

module.exports = {
  commentCreateController: defaultHandler({
    handler: commentCreateController
  }),
}