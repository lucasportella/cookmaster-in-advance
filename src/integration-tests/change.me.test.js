const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const server = require('../api/server');

const { expect } = chai;

chai.use(chaiHttp);

describe('get recipes', () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before( async () => {
        const URLMock = await DBServer.getUri();
        const connectionMock = await MongoClient.connect(URLMock, {useNewUrlParser: true, useUnifiedTopology: true})
        sinon.stub(MongoClient, 'connect').resolves(connectionMock)

        emptyRecipes = await chai.request(server).get('/recipes')

        const user = { "name" : "Erick Jacquin", "email" : "erickjacquin@gmail.com", "password" : "12345678", "role" : "user" }

        const login = {"email" : "erickjacquin@gmail.com", "password" : "12345678"}

        const recipe = { "name" : "Receita do Jacquin", "ingredients" : "Frango", "preparation" : "10 minutos no forno" }

        newUser = await chai.request(server).post('/users').send(user);

        token = await chai.request(server).post('/login').send(login)

        newRecipe = await chai.request(server).post('/recipes').set('authorization', token.body.token).send(recipe)

    })
    
    after(async () => {
        MongoClient.connect.restore();
        await DBServer.stop();
    })
    
    // empty recipes
    it('return status 200', async () => {
        expect(emptyRecipes).to.have.status(200)
    })

    it('return an empty array', async () => {
        expect(emptyRecipes.body).to.be.a('array')
        expect(emptyRecipes.body.length).to.equal(0)
    })

    // create new user
    it('returns status 201', async () => {
        expect(newUser).to.have.status(201)
    })

    it('returns an object', async () => {
        expect(newUser).to.be.a('object')
        expect(newUser.body.user).to.have.any.keys('name', 'email', 'role', '_id')
    })

    // login
    it('when login is successful, returns token', async () => {
        expect(token).to.have.status(200)
        expect(token.body.token).to.be.a('string')
    })

    // post new recipe
    it('creates new recipe on db', async () => {
        expect(newRecipe).to.have.status(201)
        expect(newRecipe.body.recipe).to.have.all.keys('name', 'ingredients', 'preparation', 'userId', '_id')
    })
});
