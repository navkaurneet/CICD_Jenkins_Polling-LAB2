const request = require('supertest');
const app = require('../index'); // Import your Express app

describe('GET /', () => {
  it('should return a 200 status and Hello, World! message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
