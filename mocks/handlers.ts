import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost/api/telemetry', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: 1,
            title: 'title',
            description: 'description',
            price: 10
          }
        ],
        status: 'success'
      })
    )
  }),
  rest.post('http://localhost/api/telemetry', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          id: 2,
          title: 'title',
          description: 'description',
          price: 10
        },
        status: 'success'
      })
    )
  }),
  rest.get('http://localhost/api/auth', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]))
  }),
  rest.get('http://localhost/api/auth/session', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]))
  })
]
