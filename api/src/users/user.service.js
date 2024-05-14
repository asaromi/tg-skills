import { User } from '../utils/db.prisma.js'
import { generateId } from '../utils/helper.js'

export const getAllUsers = async ({ page, limit, search }) => {
	const skip = page && limit ? (page - 1) * limit : undefined
	const take = parseInt(limit) ?? undefined

	let where
	if (search) {
		where = {
			OR: [
				{ name: { contains: search } },
				{ email: { contains: search } },
				{ phoneNumber: { contains: search } },
				{ jobTitle: { contains: search } },
			],
		}
	}

	return User.findMany({
		skip,
		take,
		where,
		select: {
			id: true,
			name: true,
			email: true,
			phoneNumber: true,
			jobTitle: true,
			createdAt: true,
			updatedAt: true,
		},
		orderBy: {
			createdAt: 'desc',
		},
	})
}

export const countUsers = async ({ search }) => {
	let where
	if (search) {
		where = {
			OR: [
				{ name: { contains: search } },
				{ email: { contains: search } },
				{ phoneNumber: { contains: search } },
				{ jobTitle: { contains: search } },
			],
		}
	}

	return User.count({ where })
}

export const getPaginatedUsers = async ({ page = '1', limit = '10', search }) => {
	const _page = parseInt(page)
	const _limit = parseInt(limit)
	const [count, users] = await Promise.all([
		countUsers({ page: _page, limit: _limit, search }),
		getAllUsers({ page: _page, limit: _limit, search }),
	])

	return { count, users, page: _page, limit: _limit }
}

export const createUser = async (data) => {
	data.id = generateId()

	return User.create({ data })
}