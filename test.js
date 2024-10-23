const request = require('supertest');
const app = require('./index'); // Assuming your app is exported from index.js
let server; // Declare a variable to hold the server instance

// Start the server before all tests
beforeAll((done) => {
  server = app.listen(4000, () => { // Run on a different port for testing
    done();
  });
});

// Close the server after all tests
afterAll((done) => {
  server.close(done);
});

test('GET / should return 200', async () => {
  const res = await request(server).get('/');
  expect(res.statusCode).toEqual(200);
  expect(res.text).toContain('Hello, Continuous Integration with GitHub Actions!');
});
