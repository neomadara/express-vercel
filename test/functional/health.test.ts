import app from "../../src/app";
import request from "supertest"

describe('GET Health', () => {
  it('should return basic information of application', async () => {
    const res = await request(app)
      .get("/api/health")
      .send()

    expect(res.statusCode).toEqual(200)

    expect(res.body.hasOwnProperty('uptime')).toBe(true)
    expect(res.body.hasOwnProperty('message')).toBe(true)
    expect(res.body.hasOwnProperty('timestamp')).toBe(true)
  });
})
