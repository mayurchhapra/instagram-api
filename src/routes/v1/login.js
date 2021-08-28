import controller from '../../controller/v1/login';

import { Router } from 'express';
const route = Router();

route.get('/login', controller.login);

export default route;
