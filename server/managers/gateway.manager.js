const assistantCapabilities = [
  'reservations',
  'waitlist',
  'dietary-questions',
  'guest-search',
]

const buildAssistantReply = (message) => ({
  reply: `Received: ${message}`,
  nextActions: [
    'Confirm the date and time',
    'Collect party size',
    'Offer human handoff if needed',
  ],
})

export const getHealthPayload = () => ({
  service: 'maitre-d-bff',
  status: 'ok',
  timestamp: new Date().toISOString(),
})

export const getConfigPayload = () => ({
  assistantName: "Maître d'",
  capabilities: assistantCapabilities,
})

export const getChatPayload = (message) => {
  if (!message) {
    return {
      statusCode: 400,
      body: {
        error: 'A non-empty message is required.',
      },
    }
  }

  return {
    statusCode: 200,
    body: buildAssistantReply(message),
  }
}
