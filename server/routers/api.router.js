import { Router } from 'express'

import {
	getConfig,
	getHealth,
	postChat,
} from '../controllers/gateway.controller.js'

const apiRouter = Router()

apiRouter.get('/health', getHealth)
apiRouter.get('/config', getConfig)
apiRouter.post('/chat', postChat)

export default apiRouter
