import { Router } from 'express';
import { TRY } from '../../util/try.util';

const APP_ROUTER = Router();

APP_ROUTER.get('/', (req, res, next) =>
  TRY(() => res.send({ data: 'Hello World! :D' }), next),
);

export { APP_ROUTER };
