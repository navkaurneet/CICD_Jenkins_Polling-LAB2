const request = require('supertest');
const app = require('./index');
let server;

beforeAll(() => {
  // Start the server before running tests
  server = app.listen(4000); // Start on a test-specific port
});

afterAll((done) => {
  // Close the server after tests are done
  server.close(done);
});

test('GET / should return 200', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toEqual(200);
  expect(res.text).toContain('Hello, Continuous Integration with GitHub Actions!');
});
