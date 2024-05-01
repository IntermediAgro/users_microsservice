import { Router } from 'express';
import { TRY } from '../../util/try.util';
import { USER_ROUTER } from './user/user.router';

const APP_ROUTER = Router();

APP_ROUTER.get('/', (req, res, next) =>
  TRY(() => res.send({ data: 'Hello World! :D' }), next),
);

APP_ROUTER.use('/users', USER_ROUTER);

export { APP_ROUTER };
