import fastify, { type FastifyRequest, type FastifyReply, type FastifyInstance } from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'node:path'

import { envToLogger } from './util/config'

export async function buildApp (): Promise<FastifyInstance> {
  const app = fastify({
    logger: envToLogger[process.env.NODE_ENV ?? 'production']
  })

  app.log.debug('Happy developing!')

  await app.register(fastifyStatic, {
    root: path.join(__dirname, '../public')
  })

  app.get('/', function (req: FastifyRequest, reply: FastifyReply) {
    return reply.sendFile('index.html')
  })

  app.get('/rickroll', function (req: FastifyRequest, reply: FastifyReply) {
    return reply.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  })

  return await app
}

async function main (): Promise<void> {
  const app = await buildApp()

  const port = process.env.PORT == null ? 3000 : Number.parseInt(process.env.PORT)
  app.listen({ port, host: '0.0.0.0' }, (err, address) => {
    if (err != null) throw err
    app.log.info(`Server is now listening on ${address}`)
  })
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
