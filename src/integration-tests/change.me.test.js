const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const server = require('../api/server');

const { expect } = chai;

chai.use(chaiHttp);

describe('', () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before( async () => {
        const URLMock = await DBServer.getUri();
        const connectionMock = await MongoClient.connect(URLMock, {useNewUrlParser: true, useUnifiedTopology: true})
        sinon.stub(MongoClient, 'connect').resolves(connectionMock)

        // const user = { "name" : "Erick Jacquin", "email" : "erickjacquin@gmail.com", "password" : "12345678", "role" : "user" }

        // response = await chai.request(server).post('/users').send(user);
        response = await chai.request(server).get('/recipes')

    })
    
    after(async () => {
        MongoClient.connect.restore();
        await DBServer.stop();
    })
    
    it('return status 200', async () => {
        expect(response).to.have.status(200)
    })

    it('return an empty array', async () => {
        expect(response.body).to.be.a('array')
        expect(response.body.length).to.equal(0)
    })
});
