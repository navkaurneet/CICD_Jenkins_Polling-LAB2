const request = require('supertest');
const app = require('./index.js'); // assuming your app is exported from index.js

test('GET / should return 200', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toEqual(200);
  expect(res.text).toContain('Hello, Continuous Integration with GitHub Actions!');
});
