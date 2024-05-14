import { monotonicFactory } from 'ulidx'

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
