const request = require('supertest');

let server;

describe('api/auth', ()=> {
    beforeEach(() => {server = require("../index");})
    afterEach(() => {server.close();});

    describe('POST / ', () => {
        it('should return a valid token based on already registered user', async () => {
            const payload = ({email:"proba@gmail.com",password:"proba8#"})
            const res = await request(server).post('/api/auth').send(payload);
            console.log(res) // use to see if token is received 
            expect(res.status).toBe(200);
            
        })
    })
})