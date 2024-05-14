import { Router } from 'express'
import { getUsers, storeUser } from './users/user.controller.js'
import { createUserRules } from './users/user.validator.js'
import { validateRequest } from './utils/helper.js'
import { successResponse } from './utils/response.js'
const router = Router()

router.get('/', async (req, res) => {
	return successResponse({ res, message: 'Hello Developer!' })
})
router.get('/users', getUsers)
router.post('/users',
	validateRequest(createUserRules),
	storeUser,
)

export default router