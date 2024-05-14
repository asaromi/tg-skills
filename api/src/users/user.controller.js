import { successResponse } from '../utils/response.js'
import { createUser, getPaginatedUsers } from './user.service.js'
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

export const storeUser = async (req, res, next) => {
	try {
		if (req.err) {
			throw req.err
		}

		console.log('creating user')

		const user = await createUser(req.body)
		return successResponse({ res, result: user })
	} catch (err) {
		req.err = err
		next()
	}
}