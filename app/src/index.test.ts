import { test } from 'node:test'
import assert from 'node:assert'
import { buildApp } from './index'

void test('GET / returns 200', async () => {
  const app = await buildApp()
  await app.ready()

  const response = await app.inject({
    method: 'GET',
    url: '/'
  })

  assert.strictEqual(response.statusCode, 200)
  await app.close()
})

void test('GET /rickroll redirects to YouTube', async () => {
  const app = await buildApp()
  await app.ready()

  const response = await app.inject({
    method: 'GET',
    url: '/rickroll'
  })

  assert.strictEqual(response.statusCode, 302)
  assert.strictEqual(response.headers.location, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  await app.close()
})

void test('GET /nonexistent returns 404', async () => {
  const app = await buildApp()
  await app.ready()

  const response = await app.inject({
    method: 'GET',
    url: '/nonexistent'
  })

  assert.strictEqual(response.statusCode, 404)
  await app.close()
})
