'use strict';
import express from 'express';
import path from 'path';
import route from './route';

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(process.cwd(),'views'));

export default app.use('/', route);
