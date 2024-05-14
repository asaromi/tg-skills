import { successResponse } from '../utils/response.js'
import { getPaginatedUsers } from './user.service.js'
import { paginate } from '../utils/helper.js'

export const getUsers = async (req, res, next) => {
	try {
		const { users: data, ...paginationResponse } = await getPaginatedUsers(req.query)

		return successResponse({ res, result: paginate({ ...paginationResponse, data }) })
	} catch (err) {
		req.err = err
		next()
	}
}