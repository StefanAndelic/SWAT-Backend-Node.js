const request = require('supertest');

let server;

describe('api/events', ()=> {
    beforeEach(() => {server = require("../index");})
    afterEach(() => {server.close();});

    describe('Get / ', () => {
        it('should return all events', async () => {
            const res = await request(server).get('/api/events');
            expect(res.status).toBe(200);
        })
    })
})

describe('api/events', ()=> {
    describe('POST / ', () => {
        it('should return all 401 if client is not logged in', async () => {
            const res = await request(server).post('/api/events').send({name:"Meeting.png"});
            expect(res.status).toBe(401);
        })
    })
})
