const request = require('supertest');

let server;

describe('api/users', ()=> {
    beforeEach(() => {server = require("../index");})
    afterEach(() => {server.close();});

    describe('Get / ', () => {
        it('should return all users', async () => {
            const res = await request(server).get('/api/users');
            //console.log(res);
            expect(res.status).toBe(200);
        })
    })
})