'use strict';
import { Router } from 'express';
import homePage from './homePage';
import searchPage from './searchPage';

const routes = Router();

routes
    .get('/', homePage)
    .get('/search', searchPage);

export default routes;
