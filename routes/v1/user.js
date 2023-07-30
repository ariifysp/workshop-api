const express = require('express')
const router = express.Router()
const UserController = require('../../controllers/user.controller')
const { authorization } = require('../../middlewares/authorization.middleware')

router.post('/create', authorization, UserController.userCreateController)
router.post('/login', UserController.userLoginController)

module.exports = router