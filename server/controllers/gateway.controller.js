import {
  getChatPayload,
  getConfigPayload,
  getHealthPayload,
} from '../managers/gateway.manager.js'

export const getHealth = (_request, response) => {
  response.json(getHealthPayload())
}

export const getConfig = (_request, response) => {
  response.json(getConfigPayload())
}

export const postChat = (request, response) => {
  const message = request.body?.message?.trim()
  const payload = getChatPayload(message)

  response.status(payload.statusCode).json(payload.body)
}
