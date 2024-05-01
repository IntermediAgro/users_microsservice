import { Router } from 'express';
import { MODULES } from 'modules/app.factory';
import { TRY } from 'modules/util/try.util';

const USER_ROUTER = Router();

USER_ROUTER.post('/', (req, res, next) =>
  TRY(() => res.send(MODULES.CONTROLLER.USER().create(req.body)), next),
);

USER_ROUTER.get('/:email', (req, res, next) =>
  TRY(() => res.send(MODULES.CONTROLLER.USER().findByEmail(req.params)), next),
);

export { USER_ROUTER };
