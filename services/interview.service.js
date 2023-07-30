const InterviewData = require('../data/interview.data')
const CommentData = require('../data/comment.data')
const UserData = require('../data/user.data')
const InterviewDomain = require('../domains/interview.domain')
const CommentDomain = require('../domains/comment.domain')
const CustomError = require('../errors/custom.error')

const interviewCreateService = async (data) => {
  try {
    const { name, imageKey, topic, detail, userId } = data
    const interview = {
      name: name,
      imageKey: imageKey,
      topic: topic,
      detail: detail,
      createBy: userId,
    }
    await InterviewData.createInterview(interview)
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

const interviewListService = async (data) => {
  try {
    const { total, interviews } = await InterviewData.getInterviewList(data)

    const userIds = []
    for (const item of interviews) {
      if (!userIds.includes(item.createBy))
        userIds.push(item.createBy)
    }
    const users = await UserData.getUsersByUserIds(userIds)

    const items = await InterviewDomain.interviewListFormat(interviews, users)
    return {
      total: total,
      items: items
    }
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

const interviewService = async (data) => {
  try {
    const { interviewId } = data
    let interview = await InterviewData.getInterviewById(interviewId)
    let comments = await CommentData.getCommentList(interview.interviewId)
    const user = await UserData.getUserByUserId(interview.createBy)

    const userIds = []
    for (const item of comments) {
      if (!userIds.includes(item.createBy))
        userIds.push(item.createBy)
    }
    const users = await UserData.getUsersByUserIds(userIds)

    interview = await InterviewDomain.interviewFormat(interview, user)
    comments = await CommentDomain.commentListFormat(comments, users)
    return {
      interview: interview,
      comments: comments
    }
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

const interviewStatusService = async (data) => {
  try {
    await InterviewData.updateStatusInterview(data)
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

module.exports = {
  interviewCreateService,
  interviewListService,
  interviewService,
  interviewStatusService,
}