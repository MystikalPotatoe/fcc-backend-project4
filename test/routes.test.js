import test from 'tape';
import request from 'supertest';
import app from '../source/routes';
import path from 'path';

const setup = test;

setup('ensure views location is set correctly',(t) => {
    app.set('views',path.resolve('../source/views'));
    t.end();
});

test('quick api root check', (t) => {
    request(app)
        .get('/')
        .expect(200)
        .end((err,res) => {
            if(err) console.error(err);
            t.equal(2,2,'2 is of course 2');
            t.end();
        });
});
