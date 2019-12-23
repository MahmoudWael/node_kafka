const request = require('supertest');
const express = require('express');
const app = express();

describe('GET /heartbeat', () => {
    it('should return response status code 200', () => {
        request(app)
            .get('/heartbeat')
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
            });
    });
});
