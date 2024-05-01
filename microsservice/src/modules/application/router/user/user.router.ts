import { Router } from 'express';
import { TRY } from 'modules/util/try.util';

const USER_ROUTER = Router();

USER_ROUTER.get('/', (req, res, next) => TRY(() => res.send(), next));
