import { Router } from 'express';
import { MODULES } from '../../../app.factory';
import { TRY } from '../../../util/try.util';

const USER_ROUTER = Router();

USER_ROUTER.post(
  '/',
  async (req, res, next) =>
    await TRY(
      async () => res.send(await MODULES.CONTROLLER.USER().create(req.body)),
      next,
    ),
);

USER_ROUTER.get('/:email', (req, res, next) =>
  TRY(
    async () =>
      res.send(await MODULES.CONTROLLER.USER().findByEmail(req.params)),
    next,
  ),
);

export { USER_ROUTER };
