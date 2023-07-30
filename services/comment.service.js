const CommentData = require('../data/comment.data')
const InterviewData = require('../data/interview.data')
const CustomError = require('../errors/custom.error')

const commentCreateService = async (data) => {
  try {
    const { message, interviewId, userId } = data
    const interview = await InterviewData.getInterviewById(interviewId)
    const comment = {
      interviewId: interview.interviewId,
      message: message,
      createBy: userId,
    }
    await CommentData.createComment(comment)
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

module.exports = {
  commentCreateService,
}