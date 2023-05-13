import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost/api/telemetry', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([])
    )
  }),
  rest.post('http://localhost/api/telemetry', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([])
    )
  }),
  rest.get('http://localhost/api/auth', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([])
    )
  }),
  rest.get('http://localhost/api/auth/session', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([])
    )
  })
]
