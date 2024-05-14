import { monotonicFactory } from 'ulidx'
import Validator from 'validatorjs'

export const generateId = (unixTimestamp) => {
	const id = monotonicFactory()(unixTimestamp ?? Date.now())
	return id.toString().toLowerCase()
}

export const paginate = ({ page, limit, count, data }) => ({
	meta: {
		totalPages: Math.ceil(count / limit),
		currentPage: count && page || null,
		totalItems: count,
		itemsPerPage: limit ?? null,
	},
	data
})

export const validateRequest = (rules, body = 'body') => async (req, _res, next) => {
	try {
		const validate = new Validator(req[body], rules)

		if (validate.fails()) {
			throw validate.errors.all()
		}
	} catch (err) {
		req.err = err
	} finally {
		next()
	}
}
