import { config } from 'dotenv'
import express from 'express'

import router from './routes.js'
import { errorHandler } from './utils/response.js'

config()
const app = express()
const port = process.env.PORT ?? 3000
const host = process.env.HOST ?? 'localhost'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)
app.use(errorHandler)

app.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`)
})
