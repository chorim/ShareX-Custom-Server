import request from 'supertest'
import { app } from "../../src/App"
describe('GET: /', () => {
  test('root 페이지 조회', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
  })
})