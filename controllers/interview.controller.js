const InterviewValidator = require('../validators/interview.validator')
const InterviewService = require('../services/interview.service')
const { defaultHandler } = require('./handler.controller')

const interviewCreateController = async (req) => {
  const data = await InterviewValidator.interviewCreateValidator({...req.body})
  await InterviewService.interviewCreateService({...data, ...req.decode})
  return {
    status: 1,
    message: 'Create interview successfully'
  }
}

const interviewListController = async (req) => {
  const data = await InterviewValidator.interviewListwValidator({...req.query})
  const result = await InterviewService.interviewListService(data)
  return {
    status: 1,
    message: 'Get interview list successfully',
    data: result
  }
}

const interviewController = async (req) => {
  const data = await InterviewValidator.interviewValidator({...req.params})
  const result = await InterviewService.interviewService(data)
  return {
    status: 1,
    message: 'Get interview successfully',
    data: result
  }
}

const interviewStatusController = async (req) => {
  const data = await InterviewValidator.interviewStatusValidator({...req.params, ...req.body})
  await InterviewService.interviewStatusService({...data, ...req.decode})
  return {
    status: 1,
    message: 'Update status interview successfully'
  }
}

module.exports = {
  interviewCreateController: defaultHandler({
    handler: interviewCreateController
  }),
  interviewListController: defaultHandler({
    handler: interviewListController
  }),
  interviewController: defaultHandler({
    handler: interviewController
  }),
  interviewStatusController: defaultHandler({
    handler: interviewStatusController
  }),
}