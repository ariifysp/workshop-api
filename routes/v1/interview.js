const express = require('express')
const router = express.Router()
const InterviewController = require('../../controllers/interview.controller')
const CommentController = require('../../controllers/comment.controller')
const { authorization } = require('../../middlewares/authorization.middleware')

router.post('/create', authorization, InterviewController.interviewCreateController)
router.get('', authorization, InterviewController.interviewListController)
router.get('/:interviewId', authorization, InterviewController.interviewController)
router.post('/:interviewId/comment', authorization, CommentController.commentCreateController)
router.patch('/:interviewId/status', authorization, InterviewController.interviewStatusController)

module.exports = router