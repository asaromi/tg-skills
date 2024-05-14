import { Router } from 'express'
import { getUsers } from './users/user.controller.js'
import { successResponse } from './utils/response.js'
const router = Router()

router.get('/', async (req, res) => {
	return successResponse({ res, message: 'Hello Developer!' })
})
router.get('/users', getUsers)

export default router