import { config } from 'dotenv'

config()
export const successResponse = ({ res, result, message, status }) =>
	res.status(status ?? 200).json({ success: true, result, message })

const errorResponse = ({ res, err, status }) => {
	const message = (err?.message || err) ?? 'Internal Server Error'
	if (process.env.APP_DEBUG === 'true') {
		console.error(message)
	}

	return res.status(status ?? 500).json({ success: false, error: { message } })
}

export const errorHandler = async (req, res) => {
	const { err } = req
	const status = (err || err instanceof Error) && (err?.status || 500) || 404

	if (status === 404) {
		return errorResponse({ res, err: { message: 'Not Found' }, status })
	}

	return errorResponse({ res, err, status })
}
