import sinon from 'sinon';
import request from 'supertest'; // allows us to test server endpoints of a node server without starting the server
import { expect } from 'chai';
import db from './db';
import { app } from './server';

describe('GET /users/:username', () => {

    // we're prevent any real database calls from happening
    // start a server just for test is time comsuming
    // so we'll use supertest to check our endpoints
    // 1. check the correct response code and content type is sent in the response
    // 2. check that the body of the response is what we expect it to be
    it('sends the correct response when a user with the username is found', async () => {
        const fakeData = {
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com'
        };

        // on the db object with stub out the getUserByUsername method
        // this method resolves with the above fakeData
        const stub = sinon
            .stub(db, 'getUserByUsername')
            .resolves(fakeData);

        // test how the server responds to GET request for '/users/abc/'
        await request(app).get('/users/abc')
            .expect(200) // check response body
            .expect('Content-Type', /json/) // check content type
            .expect(fakeData); // check response body

        // need to check that the stubbed test double 'db' is called with the correct argument
        // on the FIRST call of our stub we expect the first arg to === 'abc'
        expect(stub.getCall(0).args[0]).to.equal('abc');
        
        // return the method to normal before 
        // run any other tests
        stub.restore();
    });
})