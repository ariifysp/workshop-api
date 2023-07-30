const InterviewModel = require('../models/interview.model')
const CustomError = require('../errors/custom.error')
const QueryHelper = require('../helpers/query.helper')

const createInterview = async (data) => {
  try {
    const interviewId = await QueryHelper.autoIncrement('interviewId')
    const interview = new InterviewModel({interviewId, ...data})
    await interview.save()
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

const getInterviewList = async (data) => {
  try {
    const keyword = data.keyword || ''
    const page = data.page || 1
    const pagesize = data.pagesize || 10
    
    const condition = {
      isDelete: false,
      status: 'To Do',
      $or: [
        { topic: { $regex: `.*${keyword}.*`, $options: 'i' } },
      ]
    }
    
    const total = await InterviewModel.count(condition)
    const interviews = await InterviewModel
                        .find(condition)
                        .skip((page - 1) * pagesize)
                        .limit(pagesize)
                        .sort({ createDt: 1 })
    return {
      total: total,
      interviews: interviews
    }
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

const getInterviewById = async (interviewId) => {
  try {
    const condition = {
      isDelete: false,
      _id: interviewId,
    }
    const interview = await InterviewModel.findOne(condition)
    return interview
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

const updateStatusInterview = async (data) => {
  try {
    const { interviewId, status, userId } = data
    const condition = {
      isDelete: false,
      _id: interviewId
    }
    const interview = await InterviewModel.findOne(condition)
    interview.status = status
    interview.updateDt = new Date
    interview.updateBy = userId
    await interview.save()
  } catch (error) {
    throw new CustomError(error.name, error.message)
  }
}

module.exports = {
  createInterview,
  getInterviewList,
  getInterviewById,
  updateStatusInterview,
}