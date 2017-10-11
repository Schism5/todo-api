const expect = require('expect');
const request = require('supertest');

const app = require('./../server');
const Todo = require('./../model/todo');

//challenge
//make this not dumb since it clears the mongo collection...
beforeEach(done => {
    Todo.remove({}).then(() => done());
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

                Todo.find().then(todos => {
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
                    expect(todos.length).toBe(0);
                    done();
                }).catch(error => done(error));
            });
    });
});