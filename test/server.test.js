const expect = require('expect');
const request = require('supertest');

const app = require('./../server');
const Todo = require('./../model/todo');

const todos = [
    { text: 'Do something 1' },
    { text: 'Do something 2' },
    { text: 'Do something 3' }
];

beforeEach(done => {
    Todo.remove({}).then(() => {
         return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos', () => {
    it('should create a new todo', done => {
        var text = "test todo text";

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((error, res) => {
                if(error) {
                    done(error);
                    return;
                }

                Todo.find({text}).then(todos => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch(error => done(error));
            });
    });

    //challenge
    it('should not create todo with no requst body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            //dont actually need the res expectation
            .expect(res => {
                expect(res.body.errors).toExist();
            })
            .end((error, res) => {
                if(error) {
                    done(error);
                    return;
                }

                Todo.find().then(todos => {
                    expect(todos.length).toBe(3);
                    done();
                }).catch(error => done(error));
            });
    });
});

describe('GET /todos', () => {

    it('should get all todos', done => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect(res => {
                expect(res.body.todos.length).toBe(3);
            })
            .end(done);
    });
});